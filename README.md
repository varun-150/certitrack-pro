# CertiTrack Pro

## Professional Certification Tracking Platform

Transform compliance management into a strategic advantage with intelligent certification tracking technology.

### Features

- **Centralized Hub**: All certifications & compliance in one cloud-based system
- **Intelligent Automation**: Automated renewal reminders at configurable intervals
- **Secure Access Control**: Role-based permissions (Manager, Admin, Employee)
- **Vendor-Specific Tracking**: Support Google, Citrix, AWS, Microsoft certifications
- **Real-time Dashboards**: Certification status by department/role/expiration
- **Self-Service Portals**: Upload & manage certifications

### Pages

1. **Dashboard** - Real-time stats, expiring certifications, quick actions
2. **Certifications** - Manage all certifications with CRUD operations
3. **Reports** - Generate and export compliance reports
4. **Team** - Manage users and assign roles
5. **Settings** - Configure account & notifications
6. **Help** - FAQ & Support Documentation
7. **Profile** - User profile & preferences

### Tech Stack

- Next.js 14+
- React 18
- TailwindCSS
- MongoDB
- JWT Authentication

### Getting Started

Clone and install dependencies

```bash
npm install
npm run dev
```

### Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Deployed on Vercel - Visit: https://certitrack-pro.vercel.app


## Deployment Status

✅ **Build Status**: Production-ready with Next.js 14.2.3
- GitHub: Connected via main branch
- Vercel: Auto-deployed
- Domain: certitrack-pro-app.vercel.app
