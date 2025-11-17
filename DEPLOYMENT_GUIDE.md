# Yemen Economic Compass - Deployment Guide

This guide provides step-by-step instructions for deploying the Yemen Economic Compass platform to production.

---

## 🎯 Deployment Options

### Option 1: Manus Platform (Recommended - Easiest)
### Option 2: Cloud Hosting (AWS, Google Cloud, Azure)
### Option 3: VPS (DigitalOcean, Linode, Vultr)
### Option 4: Self-Hosted

---

## Option 1: Manus Platform Deployment

### Prerequisites
- Active Manus account
- Project checkpoint saved

### Steps

1. **Save Checkpoint**
   ```
   - Ensure all changes are committed
   - Click "Save Checkpoint" in development environment
   - Add descriptive message
   ```

2. **Publish**
   ```
   - Click "Publish" button in Management UI header
   - Platform automatically builds and deploys
   - Deployed to: https://your-project.manus.space
   ```

3. **Configure Domain (Optional)**
   ```
   - Go to Settings → Domains
   - Add custom domain
   - Update DNS records as instructed
   ```

4. **Configure Secrets**
   ```
   - Go to Settings → Secrets
   - Add/update environment variables
   - Restart server if needed
   ```

5. **Monitor**
   ```
   - Go to Dashboard panel
   - View analytics (UV/PV)
   - Check server status
   ```

### Advantages
- ✅ Zero configuration
- ✅ Automatic SSL certificates
- ✅ Built-in database
- ✅ File storage included
- ✅ OAuth pre-configured
- ✅ One-click rollback
- ✅ Analytics included

---

## Option 2: Cloud Hosting Deployment

### AWS Deployment

#### Prerequisites
- AWS account
- AWS CLI installed
- Domain name (optional)

#### Step 1: Set Up Database
```bash
# Create RDS MySQL instance
aws rds create-db-instance \
  --db-instance-identifier yemen-compass-db \
  --db-instance-class db.t3.micro \
  --engine mysql \
  --master-username admin \
  --master-user-password YourSecurePassword \
  --allocated-storage 20

# Note the endpoint URL
```

#### Step 2: Set Up S3 Bucket
```bash
# Create S3 bucket for file storage
aws s3 mb s3://yemen-compass-files

# Configure CORS
aws s3api put-bucket-cors \
  --bucket yemen-compass-files \
  --cors-configuration file://cors.json
```

cors.json:
```json
{
  "CORSRules": [
    {
      "AllowedOrigins": ["*"],
      "AllowedMethods": ["GET", "PUT", "POST", "DELETE"],
      "AllowedHeaders": ["*"]
    }
  ]
}
```

#### Step 3: Deploy Backend (EC2)
```bash
# Launch EC2 instance
aws ec2 run-instances \
  --image-id ami-0c55b159cbfafe1f0 \
  --instance-type t3.micro \
  --key-name your-key-pair \
  --security-groups yemen-compass-sg

# SSH into instance
ssh -i your-key.pem ubuntu@your-instance-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm
npm install -g pnpm

# Clone repository
git clone <your-repo-url>
cd yemen-financial-report

# Install dependencies
pnpm install

# Set environment variables
sudo nano /etc/environment
# Add all required variables

# Build
pnpm build

# Install PM2
npm install -g pm2

# Start server
pm2 start server/index.js --name yemen-compass
pm2 startup
pm2 save
```

#### Step 4: Deploy Frontend (S3 + CloudFront)
```bash
# Build frontend
pnpm build:client

# Upload to S3
aws s3 sync dist/ s3://yemen-compass-frontend

# Create CloudFront distribution
aws cloudfront create-distribution \
  --origin-domain-name yemen-compass-frontend.s3.amazonaws.com \
  --default-root-object index.html
```

#### Step 5: Configure Domain
```bash
# Add Route53 records
aws route53 change-resource-record-sets \
  --hosted-zone-id YOUR_ZONE_ID \
  --change-batch file://dns-records.json
```

---

### Google Cloud Deployment

#### Step 1: Set Up Database
```bash
# Create Cloud SQL instance
gcloud sql instances create yemen-compass-db \
  --database-version=MYSQL_8_0 \
  --tier=db-f1-micro \
  --region=us-central1

# Create database
gcloud sql databases create yemen_compass \
  --instance=yemen-compass-db
```

#### Step 2: Deploy to Cloud Run
```bash
# Build container
gcloud builds submit --tag gcr.io/PROJECT_ID/yemen-compass

# Deploy
gcloud run deploy yemen-compass \
  --image gcr.io/PROJECT_ID/yemen-compass \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

---

### Azure Deployment

#### Step 1: Create Resources
```bash
# Create resource group
az group create --name yemen-compass-rg --location eastus

# Create MySQL database
az mysql server create \
  --resource-group yemen-compass-rg \
  --name yemen-compass-db \
  --location eastus \
  --admin-user admin \
  --admin-password YourSecurePassword \
  --sku-name B_Gen5_1

# Create App Service
az appservice plan create \
  --name yemen-compass-plan \
  --resource-group yemen-compass-rg \
  --sku B1 \
  --is-linux

az webapp create \
  --resource-group yemen-compass-rg \
  --plan yemen-compass-plan \
  --name yemen-compass \
  --runtime "NODE|22-lts"
```

#### Step 2: Deploy Code
```bash
# Configure deployment
az webapp deployment source config \
  --name yemen-compass \
  --resource-group yemen-compass-rg \
  --repo-url <your-git-repo> \
  --branch main \
  --manual-integration

# Set environment variables
az webapp config appsettings set \
  --resource-group yemen-compass-rg \
  --name yemen-compass \
  --settings DATABASE_URL="mysql://..." JWT_SECRET="..."
```

---

## Option 3: VPS Deployment (DigitalOcean Example)

### Step 1: Create Droplet
```bash
# Create Ubuntu 22.04 droplet (2GB RAM minimum)
# SSH into droplet
ssh root@your-droplet-ip
```

### Step 2: Install Dependencies
```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 22
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs

# Install pnpm
npm install -g pnpm

# Install MySQL
apt install -y mysql-server
mysql_secure_installation

# Install Nginx
apt install -y nginx

# Install Certbot for SSL
apt install -y certbot python3-certbot-nginx
```

### Step 3: Set Up Database
```bash
# Create database
mysql -u root -p
CREATE DATABASE yemen_compass;
CREATE USER 'yemen_user'@'localhost' IDENTIFIED BY 'secure_password';
GRANT ALL PRIVILEGES ON yemen_compass.* TO 'yemen_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

### Step 4: Deploy Application
```bash
# Create app directory
mkdir -p /var/www/yemen-compass
cd /var/www/yemen-compass

# Clone repository
git clone <your-repo-url> .

# Install dependencies
pnpm install

# Create .env file
nano .env
# Add all environment variables

# Push database schema
pnpm db:push

# Build application
pnpm build

# Install PM2
npm install -g pm2

# Start server
pm2 start server/index.js --name yemen-compass
pm2 startup systemd
pm2 save
```

### Step 5: Configure Nginx
```bash
# Create Nginx config
nano /etc/nginx/sites-available/yemen-compass
```

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
ln -s /etc/nginx/sites-available/yemen-compass /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx

# Get SSL certificate
certbot --nginx -d your-domain.com
```

---

## Option 4: Self-Hosted (Docker)

### Step 1: Create Dockerfile
```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["node", "server/index.js"]
```

### Step 2: Create docker-compose.yml
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=mysql://user:password@db:3306/yemen_compass
      - JWT_SECRET=${JWT_SECRET}
      - NODE_ENV=production
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=${DB_ROOT_PASSWORD}
      - MYSQL_DATABASE=yemen_compass
      - MYSQL_USER=yemen_user
      - MYSQL_PASSWORD=${DB_PASSWORD}
    volumes:
      - db-data:/var/lib/mysql
    restart: unless-stopped

volumes:
  db-data:
```

### Step 3: Deploy
```bash
# Build and start
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

---

## Environment Variables Reference

### Required Variables
```env
# Database
DATABASE_URL=mysql://user:password@host:port/database

# JWT
JWT_SECRET=your-secret-key-min-32-chars

# OAuth
OAUTH_SERVER_URL=https://api.manus.im
OWNER_OPEN_ID=your-owner-id
OWNER_NAME=Your Name

# S3 Storage
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1
S3_BUCKET=your-bucket-name

# Frontend
VITE_APP_TITLE=Yemen Economic Compass
VITE_APP_LOGO=/yemen-compass-logo.png
```

### Optional Variables
```env
# Analytics
VITE_ANALYTICS_WEBSITE_ID=your-analytics-id
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com

# Custom branding
VITE_APP_ID=yemen-compass
VITE_OAUTH_PORTAL_URL=https://oauth.example.com
```

---

## Post-Deployment Checklist

### Security
- [ ] SSL certificate installed and working
- [ ] Environment variables secured (not in version control)
- [ ] Database credentials rotated
- [ ] Firewall configured (only ports 80, 443, 22 open)
- [ ] SSH key-based authentication enabled
- [ ] Fail2ban installed and configured
- [ ] Regular security updates scheduled

### Performance
- [ ] CDN configured for static assets
- [ ] Gzip compression enabled
- [ ] Browser caching configured
- [ ] Database indexes created
- [ ] Query performance optimized
- [ ] Load testing completed

### Monitoring
- [ ] Uptime monitoring configured
- [ ] Error tracking enabled (Sentry, etc.)
- [ ] Log aggregation set up
- [ ] Performance monitoring active
- [ ] Backup system configured
- [ ] Alerts configured for critical issues

### Functionality
- [ ] All pages load correctly
- [ ] Authentication works
- [ ] File uploads work
- [ ] Database queries execute
- [ ] API endpoints respond
- [ ] Bilingual content displays correctly
- [ ] Charts render properly
- [ ] Calculators function correctly

---

## Backup Strategy

### Database Backups
```bash
# Daily automated backup
0 2 * * * mysqldump -u user -p'password' yemen_compass > /backups/db-$(date +\%Y\%m\%d).sql

# Weekly full backup
0 3 * * 0 tar -czf /backups/full-$(date +\%Y\%m\%d).tar.gz /var/www/yemen-compass
```

### S3 Backups
```bash
# Enable versioning
aws s3api put-bucket-versioning \
  --bucket yemen-compass-files \
  --versioning-configuration Status=Enabled

# Enable lifecycle policy
aws s3api put-bucket-lifecycle-configuration \
  --bucket yemen-compass-files \
  --lifecycle-configuration file://lifecycle.json
```

---

## Rollback Procedure

### Manus Platform
1. Go to Management UI
2. Find previous checkpoint
3. Click "Rollback" button
4. Confirm rollback

### Manual Deployment
```bash
# Stop application
pm2 stop yemen-compass

# Restore database backup
mysql -u user -p yemen_compass < /backups/db-20250101.sql

# Restore code
git reset --hard <previous-commit-hash>
pnpm install
pnpm build

# Restart application
pm2 restart yemen-compass
```

---

## Troubleshooting

### Application Won't Start
```bash
# Check logs
pm2 logs yemen-compass

# Check environment variables
printenv | grep DATABASE

# Test database connection
mysql -h host -u user -p -e "SELECT 1"
```

### Database Connection Issues
```bash
# Check MySQL status
systemctl status mysql

# Check firewall
sudo ufw status

# Test connection
telnet db-host 3306
```

### High Memory Usage
```bash
# Check Node.js memory
pm2 monit

# Increase memory limit
pm2 start server/index.js --max-memory-restart 1G
```

---

## Support

For deployment assistance:
- Check logs first
- Review this guide
- Contact CauseWay Foundation support
- Submit issue on GitHub

---

**Deployment Guide Version 1.0 - Updated January 2025**
