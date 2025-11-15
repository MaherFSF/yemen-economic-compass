# File Storage Integration Guide

## Overview

The Yemen Economic Compass platform now includes a complete file storage system with S3 integration, allowing users to upload, manage, and share research documents, reports, charts, and other media files.

---

## Features

### Backend Capabilities
- **S3 Storage Integration**: Files are stored in S3 with automatic URL generation
- **Database Metadata**: File information tracked in MySQL database
- **User Authentication**: Secure file uploads with user ownership tracking
- **File Categories**: Organize files by type (report, chart, document, image, other)
- **Access Control**: Users can only delete their own files (admins can delete any file)

### Frontend Features
- **Drag-and-Drop Upload**: Intuitive file upload interface
- **File Type Validation**: Supports PDF, images (PNG, JPG, GIF), Word (DOC, DOCX), Excel (XLS, XLSX)
- **Size Limit**: Maximum 50MB per file
- **Upload Progress**: Real-time progress indicator during upload
- **Search & Filter**: Find files by name, description, or category
- **Download & Delete**: Easy file management actions
- **Statistics Dashboard**: View file counts by category
- **Bilingual Support**: Full Arabic/English interface

---

## Database Schema

### Files Table

```sql
CREATE TABLE files (
  id INT AUTO_INCREMENT PRIMARY KEY,
  filename VARCHAR(255) NOT NULL,
  fileKey VARCHAR(512) NOT NULL,
  url TEXT NOT NULL,
  mimeType VARCHAR(100) NOT NULL,
  fileSize INT NOT NULL,
  category ENUM('report', 'chart', 'document', 'image', 'other') DEFAULT 'document',
  description TEXT,
  uploadedBy INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

**Fields:**
- `id`: Unique file identifier
- `filename`: Original filename as uploaded
- `fileKey`: S3 storage key (path) for retrieving the file
- `url`: Public S3 URL for accessing the file
- `mimeType`: File MIME type (e.g., application/pdf, image/png)
- `fileSize`: File size in bytes
- `category`: File category for organization
- `description`: Optional user-provided description
- `uploadedBy`: Foreign key to users.id (file owner)
- `createdAt`: Upload timestamp
- `updatedAt`: Last modification timestamp

---

## API Endpoints (tRPC)

### File Upload
```typescript
trpc.files.upload.useMutation({
  filename: string,
  mimeType: string,
  fileSize: number,
  category: "report" | "chart" | "document" | "image" | "other",
  description?: string,
  base64Data: string
})
```

**Authentication**: Required (protectedProcedure)

**Process:**
1. Client reads file and converts to base64
2. Sends base64 data with metadata to server
3. Server converts base64 to buffer
4. Uploads buffer to S3 using `storagePut()`
5. Saves metadata to database
6. Returns success status and file URL

### List User Files
```typescript
trpc.files.list.useQuery()
```

**Authentication**: Required  
**Returns**: Array of files uploaded by current user

### List All Files (Admin)
```typescript
trpc.files.listAll.useQuery()
```

**Authentication**: Required (admin role)  
**Returns**: Array of all files in system

### List Files by Category
```typescript
trpc.files.listByCategory.useQuery({
  category: "report" | "chart" | "document" | "image" | "other"
})
```

**Authentication**: Public  
**Returns**: Array of files in specified category

### Delete File
```typescript
trpc.files.delete.useMutation({
  fileId: number
})
```

**Authentication**: Required  
**Authorization**: Owner or admin only

---

## Usage Examples

### Frontend: Upload a File

```tsx
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

function MyUploadComponent() {
  const uploadMutation = trpc.files.upload.useMutation({
    onSuccess: () => {
      toast.success("File uploaded successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleFileUpload = async (file: File) => {
    // Read file as base64
    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64Data = e.target?.result as string;
      const base64Content = base64Data.split(',')[1];

      await uploadMutation.mutateAsync({
        filename: file.name,
        mimeType: file.type,
        fileSize: file.size,
        category: "document",
        description: "My uploaded document",
        base64Data: base64Content,
      });
    };
    reader.readAsDataURL(file);
  };

  return <input type="file" onChange={(e) => handleFileUpload(e.target.files[0])} />;
}
```

### Frontend: List and Display Files

```tsx
import { trpc } from "@/lib/trpc";

function MyFileList() {
  const { data: files, isLoading } = trpc.files.list.useQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {files?.map(file => (
        <div key={file.id}>
          <h3>{file.filename}</h3>
          <p>Size: {file.fileSize} bytes</p>
          <p>Category: {file.category}</p>
          <a href={file.url} target="_blank">Download</a>
        </div>
      ))}
    </div>
  );
}
```

### Backend: Custom File Query

```typescript
// In server/db.ts
import { eq, and } from "drizzle-orm";
import { files } from "../drizzle/schema";

export async function getRecentFiles(userId: number, limit: number = 10) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(files)
    .where(eq(files.uploadedBy, userId))
    .orderBy(files.createdAt, 'desc')
    .limit(limit);
}
```

---

## File Manager Page

Access the file management interface at: **`/files`**

**Features:**
- Upload new files with drag-and-drop
- View all uploaded files with metadata
- Search files by name or description
- Filter files by category
- Download files
- Delete owned files
- View statistics (total files, reports, charts, documents)

**Authentication Required**: Users must login to access file management

---

## S3 Storage Details

### File Key Format
```
user-{userId}/files/{timestamp}-{randomSuffix}.{extension}
```

**Example**: `user-123/files/1763190843-abc123xyz.pdf`

### Storage Helper
The platform uses the pre-configured `storagePut()` helper from `server/storage.ts`:

```typescript
import { storagePut } from "./server/storage";

const { url } = await storagePut(
  fileKey,      // S3 key/path
  buffer,       // File data as Buffer
  mimeType      // MIME type
);
```

**Note**: The S3 bucket is public, so returned URLs work without additional signing.

---

## Security Considerations

### File Upload Security
- **Size Limit**: 50MB maximum enforced on frontend and backend
- **Type Validation**: Only allowed MIME types accepted
- **User Authentication**: All uploads require valid user session
- **Unique Keys**: Random suffixes prevent enumeration attacks

### Access Control
- **File Ownership**: Users can only delete their own files
- **Admin Override**: Admin role can delete any file
- **Public URLs**: S3 URLs are public but non-enumerable

### Best Practices
1. Validate file types on both frontend and backend
2. Scan uploaded files for malware (not implemented, consider adding)
3. Implement rate limiting for uploads (not implemented, consider adding)
4. Monitor storage usage and set quotas per user (not implemented, consider adding)

---

## Supported File Types

### Documents
- **PDF**: `application/pdf`
- **Word**: `application/msword`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
- **Excel**: `application/vnd.ms-excel`, `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

### Images
- **PNG**: `image/png`
- **JPEG**: `image/jpeg`, `image/jpg`
- **GIF**: `image/gif`

---

## Future Enhancements

### Potential Features
1. **Bulk Upload**: Support multiple file uploads simultaneously
2. **File Preview**: In-browser preview for PDFs and images
3. **Folder Organization**: Create folders/collections for better organization
4. **File Sharing**: Share files with other users or generate public links
5. **Version Control**: Track file versions and allow rollback
6. **Storage Quotas**: Set per-user storage limits
7. **Advanced Search**: Full-text search in PDF content
8. **Thumbnail Generation**: Auto-generate thumbnails for images and PDFs
9. **Compression**: Auto-compress large files before upload
10. **CDN Integration**: Serve files through CDN for faster delivery

### Performance Optimizations
1. **Chunked Upload**: Split large files into chunks for better reliability
2. **Direct S3 Upload**: Generate presigned URLs for direct client-to-S3 upload
3. **Lazy Loading**: Paginate file lists for better performance
4. **Caching**: Cache file metadata queries

---

## Troubleshooting

### Upload Fails
- **Check file size**: Must be under 50MB
- **Check file type**: Only supported MIME types allowed
- **Check authentication**: User must be logged in
- **Check network**: Ensure stable internet connection

### Files Not Appearing
- **Refresh the list**: Click refresh or reload page
- **Check filters**: Ensure category filter is not hiding files
- **Check ownership**: Users only see their own files (unless admin)

### Download Issues
- **Check URL**: S3 URLs should be publicly accessible
- **Check browser**: Try different browser or incognito mode
- **Check network**: Ensure no firewall blocking S3 domain

---

## Technical Stack

- **Backend**: Express + tRPC + Drizzle ORM
- **Database**: MySQL/TiDB
- **Storage**: AWS S3 (via Manus platform)
- **Frontend**: React 19 + TypeScript
- **Authentication**: Manus OAuth
- **UI Components**: shadcn/ui + Tailwind CSS

---

## Contact & Support

For issues or questions about file storage:
- Review this documentation
- Check the code in `server/routers.ts` (files router)
- Check the database schema in `drizzle/schema.ts`
- Check the UI components in `client/src/components/FileUpload.tsx` and `client/src/pages/FileManager.tsx`

---

## Changelog

### Version 1.0.0 (2025-01-15)
- ✅ Initial file storage implementation
- ✅ S3 integration with automatic uploads
- ✅ Database schema for file metadata
- ✅ File upload component with drag-and-drop
- ✅ File manager dashboard
- ✅ Search and filter functionality
- ✅ Download and delete actions
- ✅ Category-based organization
- ✅ Full bilingual support (Arabic/English)
