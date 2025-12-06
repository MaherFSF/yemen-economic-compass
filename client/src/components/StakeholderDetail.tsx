import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Building2,
  DollarSign,
  Calendar,
  MapPin,
  Globe,
  Mail,
  Phone,
  FileText,
  TrendingUp,
  Users,
  Target
} from "lucide-react";

interface Project {
  id: string;
  titleEn: string;
  titleAr: string;
  amount: string;
  date: string;
  status: 'active' | 'completed' | 'planned';
  descriptionEn: string;
  descriptionAr: string;
}

interface ImpactMetric {
  labelEn: string;
  labelAr: string;
  value: string;
  icon: React.ReactNode;
}

interface StakeholderDetailProps {
  nameEn: string;
  nameAr: string;
  type: string;
  descriptionEn: string;
  descriptionAr: string;
  logoUrl?: string;
  website?: string;
  email?: string;
  phone?: string;
  location?: string;
  totalFunding: string;
  projects: Project[];
  impactMetrics: ImpactMetric[];
  keyAchievementsEn: string[];
  keyAchievementsAr: string[];
  challengesEn: string[];
  challengesAr: string[];
}

export default function StakeholderDetail({
  nameEn,
  nameAr,
  type,
  descriptionEn,
  descriptionAr,
  logoUrl,
  website,
  email,
  phone,
  location,
  totalFunding,
  projects,
  impactMetrics,
  keyAchievementsEn,
  keyAchievementsAr,
  challengesEn,
  challengesAr
}: StakeholderDetailProps) {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const name = isArabic ? nameAr : nameEn;
  const description = isArabic ? descriptionAr : descriptionEn;
  const keyAchievements = isArabic ? keyAchievementsAr : keyAchievementsEn;
  const challenges = isArabic ? challengesAr : challengesEn;

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "outline"; label: string; labelAr: string }> = {
      active: { variant: "default", label: "Active", labelAr: "نشط" },
      completed: { variant: "secondary", label: "Completed", labelAr: "مكتمل" },
      planned: { variant: "outline", label: "Planned", labelAr: "مخطط" }
    };
    const config = variants[status] || variants.active;
    return (
      <Badge variant={config.variant}>
        {isArabic ? config.labelAr : config.label}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <Card className="bg-gradient-to-br from-primary/5 via-background to-background">
        <CardHeader>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {logoUrl && (
              <div className="w-24 h-24 rounded-lg bg-white p-4 shadow-md flex items-center justify-center">
                <img src={logoUrl} alt={name} className="max-w-full max-h-full object-contain" />
              </div>
            )}
            <div className="flex-1">
              <CardTitle className="text-3xl mb-2">{name}</CardTitle>
              <CardDescription className="text-lg">{description}</CardDescription>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline" className="text-sm">
                  <Building2 className="w-4 h-4 mr-1" />
                  {type}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <DollarSign className="w-4 h-4 mr-1" />
                  {totalFunding} {isArabic ? 'إجمالي التمويل' : 'Total Funding'}
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">
            {isArabic ? 'معلومات الاتصال' : 'Contact Information'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {website && (
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-muted-foreground" />
                <a href={website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {website.replace('https://', '').replace('http://', '')}
                </a>
              </div>
            )}
            {email && (
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <a href={`mailto:${email}`} className="text-primary hover:underline">
                  {email}
                </a>
              </div>
            )}
            {phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <span>{phone}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span>{location}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Impact Metrics */}
      {impactMetrics.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {impactMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {metric.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">
                      {isArabic ? metric.labelAr : metric.labelEn}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Tabs for Projects, Achievements, Challenges */}
      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="projects">
            <FileText className="w-4 h-4 mr-2" />
            {isArabic ? 'المشاريع' : 'Projects'}
          </TabsTrigger>
          <TabsTrigger value="achievements">
            <Target className="w-4 h-4 mr-2" />
            {isArabic ? 'الإنجازات' : 'Achievements'}
          </TabsTrigger>
          <TabsTrigger value="challenges">
            <TrendingUp className="w-4 h-4 mr-2" />
            {isArabic ? 'التحديات' : 'Challenges'}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                {isArabic ? 'المشاريع والتمويل' : 'Projects and Funding'}
              </CardTitle>
              <CardDescription>
                {isArabic 
                  ? `إجمالي ${projects.length} مشروع`
                  : `Total of ${projects.length} projects`
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.map((project) => (
                  <Card key={project.id} className="border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg">
                            {isArabic ? project.titleAr : project.titleEn}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {isArabic ? project.descriptionAr : project.descriptionEn}
                          </CardDescription>
                        </div>
                        {getStatusBadge(project.status)}
                      </div>
                      <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-semibold">{project.amount}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.date}</span>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                {isArabic ? 'الإنجازات الرئيسية' : 'Key Achievements'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {keyAchievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="challenges" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                {isArabic ? 'التحديات والعقبات' : 'Challenges and Obstacles'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
