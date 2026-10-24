# Hospital Purchase Request App

A comprehensive web-based application for managing hospital purchase requests and internal service requests with a multi-stage approval workflow system.

## 🎯 Overview

The Hospital Purchase Request App is a full-featured, production-ready request management system designed specifically for healthcare facilities. It streamlines the process of requesting, approving, and tracking purchases and internal services across multiple hospital departments. The application provides role-based access control, real-time status tracking, document management, and comprehensive analytics through an intuitive dashboard.

**Current Status: 80% Production Ready**
- ✅ Full-stack application with integrated backend API and PostgreSQL database
- ✅ Complete authentication system with JWT tokens
- ✅ Multi-stage approval workflow fully functional
- ✅ File upload/download system operational
- ✅ Tested and working with multiple user roles
- ⚠️ Requires security hardening and database backup setup before production deployment

### What This App Does

**Core Functionality:**
- **Request Creation**: Staff and department heads can create detailed purchase requests or internal service requests with multiple line items, budget codes, vendor suggestions, and document attachments
- **Multi-Stage Approval Workflow**: Requests flow through a structured approval process involving department heads, procurement officers, and finance officers
- **Real-Time Tracking**: Complete visibility into request status with detailed history logs and timestamps
- **Document Management**: Upload and attach supporting documents (quotes, specifications, invoices) to requests
- **Analytics Dashboard**: Visual insights into request statistics, department distribution, status breakdowns, and total spending
- **Commenting System**: Collaborative communication through request-specific comments
- **Role-Based Access**: Different views and permissions based on user roles (Admin, Department Head, Procurement Officer, Finance Officer, Staff)

**Request Types:**
1. **Request to Purchase (RTP)**: External purchases requiring vendor procurement
2. **Internal Request (INT)**: Internal services or transfers between departments

## ✨ Key Features

### 1. Dashboard & Analytics
- **Statistics Cards**: Total requests, pending approvals, completed requests, and total monetary value
- **Visual Charts**: 
  - Bar chart showing request distribution across departments
  - Pie chart displaying status distribution
- **Recent Activity**: Quick view of the latest requests with key details
- **Role-Specific Views**: Filtered data based on user role and department

### 2. Request Management
- **Comprehensive Request Form**:
  - Basic information (title, description, department, priority)
  - Multiple line items with quantity, unit price, and automatic total calculation
  - Document upload support (any file type)
  - Optional fields (budget code, vendor suggestion, expected delivery date)
  - Save as draft or submit for approval

- **Request List View**:
  - Filterable by status, type, department, and priority
  - Search functionality
  - Quick status badges and priority indicators
  - Sortable columns

- **Detailed Request View**:
  - Complete request information
  - Line item breakdown with totals
  - Status history timeline
  - Comment thread
  - Document attachments with download capability
  - Action buttons based on user role and request status

### 3. Approval Workflow
Requests progress through multiple stages:
1. **Draft** → Initial creation
2. **Submitted** → Sent for review
3. **Department Approved** → Approved by department head
4. **Procurement Review** → Under procurement officer review
5. **Budget Approval** → Awaiting finance approval
6. **Approved** → Fully approved, ready for execution
7. **In Progress** → Being fulfilled
8. **Completed** → Successfully fulfilled
9. **Rejected** → Denied at any stage (with reason)

### 4. User Authentication & Security
- Secure JWT-based authentication system
- Password hashing with bcrypt
- Session persistence with token refresh
- Role-based authorization middleware
- Protected API endpoints

### 5. Responsive Design
- Mobile-friendly interface
- Adaptive layouts for tablets and desktops
- Touch-optimized controls

## 👥 User Roles & Permissions

### 1. Admin
- **Access**: Full system access
- **Capabilities**: 
  - View all requests across all departments
  - Create, approve, or reject any request
  - Access complete analytics
  - Manage system-wide operations

### 2. Department Head
- **Access**: Department-specific access
- **Capabilities**:
  - View all requests from their department
  - Create requests for their department
  - Approve or reject requests from their department
  - First-level approval authority

### 3. Procurement Officer
- **Access**: All requests requiring procurement
- **Capabilities**:
  - View all submitted requests
  - Review and process purchase requests
  - Add procurement-specific comments
  - Forward to finance for budget approval
  - Track vendor relationships

### 4. Finance Officer
- **Access**: All requests requiring budget approval
- **Capabilities**:
  - View all requests in budget approval stage
  - Approve or reject based on budget availability
  - Add financial comments and notes
  - Final approval authority for purchases

### 5. Staff
- **Access**: Personal requests only
- **Capabilities**:
  - Create new requests
  - View own requests
  - Add comments to own requests
  - Track request status

## 🔄 Request Workflow

```
┌─────────────────────────────────────────────────────────────┐
│                     REQUEST LIFECYCLE                        │
└─────────────────────────────────────────────────────────────┘

1. CREATION (Staff/Department Head)
   └─> Draft → Submit
   
2. DEPARTMENT APPROVAL (Department Head)
   └─> Review → Approve/Reject
   
3. PROCUREMENT REVIEW (Procurement Officer)
   └─> Assess → Forward to Finance
   
4. BUDGET APPROVAL (Finance Officer)
   └─> Budget Check → Approve/Reject
   
5. EXECUTION (Procurement Officer)
   └─> Approved → In Progress → Completed

* Rejection can occur at any stage with comments
* Each stage is logged in status history
* Email notifications sent at each transition (in production)
```

## 🏗️ System Architecture

### Technology Stack

**Frontend:**
- **React 18.3.1**: Component-based UI library
- **TypeScript**: Type-safe development
- **Vite 6.4.1**: Fast build tool and dev server
- **Tailwind CSS 4.1.12**: Utility-first CSS framework
- **Radix UI & shadcn/ui**: Accessible component library
- **Recharts 2.15.2**: Data visualization
- **React Hook Form 7.55.0**: Form management

**Backend:**
- **Node.js & Express**: RESTful API server
- **TypeScript**: Type-safe backend development
- **Prisma ORM**: Database access and migrations
- **JWT**: Secure token-based authentication
- **Bcrypt**: Password hashing
- **Multer**: File upload handling

**Database:**
- **PostgreSQL 18**: Production-grade relational database
- **Prisma Schema**: Type-safe database models

**Authentication & Security:**
- JWT token authentication
- Role-based access control (RBAC)
- Password encryption with bcrypt
- CORS configuration
- Request validation

### Project Structure

```
Hospital-Purchase-Request-App-2/
├── backend/                        # Backend API Server
│   ├── src/
│   │   ├── index.ts                # Express server entry point
│   │   ├── controllers/            # Request handlers
│   │   │   ├── authController.ts   # Login, logout, authentication
│   │   │   ├── requestController.ts # Request CRUD operations
│   │   │   ├── approvalController.ts # Approval workflow
│   │   │   └── attachmentController.ts # File uploads
│   │   ├── middleware/
│   │   │   └── auth.ts             # JWT verification middleware
│   │   ├── routes/
│   │   │   ├── authRoutes.ts       # Authentication endpoints
│   │   │   └── requestRoutes.ts    # Request endpoints
│   │   ├── utils/
│   │   │   ├── prisma.ts           # Database connection
│   │   │   └── fileUpload.ts       # File handling utilities
│   │   └── types/
│   │       └── express.d.ts        # TypeScript type definitions
│   ├── prisma/
│   │   ├── schema.prisma           # Database schema
│   │   └── seed.ts                 # Test data seeder
│   ├── uploads/                    # File upload storage
│   └── package.json                # Backend dependencies
├── src/                            # Frontend Application
│   ├── main.tsx                    # Application entry point
│   ├── app/
│   │   ├── App.tsx                 # Main app component with routing
│   │   ├── components/             # React components
│   │   │   ├── Dashboard.tsx       # Analytics dashboard
│   │   │   ├── LoginPage.tsx       # Authentication page
│   │   │   ├── Layout.tsx          # Main layout wrapper
│   │   │   ├── RequestList.tsx     # Request listing with filters
│   │   │   ├── CreateRequest.tsx   # Request creation form
│   │   │   ├── RequestDetail.tsx   # Detailed request view
│   │   │   ├── RequestAttachments.tsx # File upload component
│   │   │   └── ui/                 # Reusable UI components (40+)
│   │   ├── contexts/               # React Context providers
│   │   │   ├── AuthContext.tsx     # Authentication state
│   │   │   └── RequestContext.tsx  # Request data management
│   │   ├── types/                  # TypeScript type definitions
│   │   │   └── index.ts            # All app types
│   │   └── utils/
│   │       └── api.ts              # Backend API integration
│   └── styles/                     # Global styles
│       └── index.css               # Main stylesheet
├── index.html                      # HTML entry point
├── package.json                    # Frontend dependencies
├── vite.config.ts                  # Vite configuration
└── README.md                       # This file
```

### Component Architecture

**1. Layout Components:**
- `Layout.tsx`: Main application shell with navigation sidebar
- Responsive design with mobile menu support
- Navigation based on current view and user role

**2. Page Components:**
- `Dashboard.tsx`: Analytics and statistics overview
- `LoginPage.tsx`: Authentication interface
- `RequestList.tsx`: Paginated, filterable request table
- `CreateRequest.tsx`: Multi-step request creation form
- `RequestDetail.tsx`: Comprehensive request view with actions

**3. UI Components (shadcn/ui):**
Over 40 reusable components including:
- Form elements (Input, Select, Textarea, Checkbox, Radio)
- Layout (Card, Separator, Tabs, Accordion)
- Feedback (Alert, Toast, Dialog, Popover)
- Navigation (Breadcrumb, Pagination, Sidebar)
- Data display (Table, Badge, Avatar, Progress)
- Overlays (Dialog, Sheet, Drawer, Tooltip)

### State Management

**1. AuthContext (`contexts/AuthContext.tsx`):**
```typescript
- user: User | null              // Current authenticated user
- login(email, password): boolean // Authentication function
- logout(): void                  // Clear session
- isAuthenticated: boolean        // Auth status
```

**2. RequestContext (`contexts/RequestContext.tsx`):**
```typescript
- requests: Request[]             // All requests
- addRequest(request): void       // Create new request
- updateRequest(id, updates): void // Update existing request
- deleteRequest(id): void         // Remove request
- getRequestById(id): Request     // Fetch single request
```

**3. Local Storage:**
- Persists user session across page refreshes
- Stores authentication state
- Key: `hospital_user`

### Type System

**Core Types (`types/index.ts`):**

```typescript
// User roles with specific permissions
type UserRole = 'admin' | 'department_head' | 'procurement_officer' 
              | 'finance_officer' | 'staff'

// Hospital departments
type Department = 'emergency' | 'surgery' | 'radiology' | 'laboratory' 
                | 'pharmacy' | 'administration' | 'it' | 'maintenance' | 'nursing'

// Request types
type RequestType = 'purchase' | 'internal'

// Request lifecycle statuses
type RequestStatus = 'draft' | 'submitted' | 'department_approved' 
                   | 'procurement_review' | 'budget_approval' | 'approved' 
                   | 'in_progress' | 'completed' | 'rejected'

// Main entities
interface User { ... }
interface Request { ... }
interface RequestItem { ... }
interface Comment { ... }
interface StatusHistory { ... }
interface DocumentAttachment { ... }
```

### Data Flow

```
┌──────────────┐
│  User Action │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│   Component      │ ◄─── Props from parent
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│  Context API     │ ◄─── Global state
│  (Auth/Request)  │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│  Local Storage   │ ◄─── Persistence
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│   UI Update      │
└──────────────────┘
```

### Styling Approach

**Tailwind CSS Utility Classes:**
- Responsive design with breakpoint prefixes (`md:`, `lg:`)
- Dark mode support (ready for implementation)
- Custom theme colors and spacing
- Component-specific utilities

**CSS Custom Properties:**
- Theme variables in `theme.css`
- Consistent color palette
- Responsive typography scale

**Component Styling:**
- Composition over inheritance
- Variant-based styling with `class-variance-authority`
- Consistent spacing and sizing

### Key Features Implementation

**1. Dashboard Analytics:**
- Uses Recharts for data visualization
- Real-time calculation of statistics using `useMemo`
- Responsive chart containers
- Color-coded status indicators

**2. Request Form:**
- Dynamic item list with add/remove functionality
- Real-time total calculation
- File upload with preview
- Form validation before submission
- Draft save capability

**3. Request List:**
- Client-side filtering and search
- Status-based color coding
- Priority indicators
- Sortable columns
- Pagination support

**4. Status Workflow:**
- Role-based action buttons
- Status history timeline
- Comment system for collaboration
- Automatic timestamp tracking

## 📊 Sample Data

The database includes pre-populated test data:
- **8 Test Users** across all roles (Admin, Department Heads, Procurement, Finance, Staff)
- **11+ Sample Requests** demonstrating various:
  - Request types (Purchase and Internal)
  - Status stages (from Draft to Completed)
  - Priority levels (Low to Urgent)
  - Departments (Emergency, Surgery, Radiology, IT, Maintenance, Laboratory)
  - Approval workflows with status history
  - Comments and collaboration
  - Document attachments

Run `npm run seed` in the backend folder to populate the database with test data.

## 🎨 Design System

The application uses a consistent design system based on:
- **Color Palette**: Professional healthcare-appropriate colors
- **Typography**: Clear, readable font hierarchy
- **Spacing**: Consistent 4px/8px grid system
- **Components**: Accessible, keyboard-navigable UI elements
- **Icons**: Lucide React icon set for consistency
- **Animations**: Subtle transitions for better UX

## ✅ Implemented Features

- ✅ **Backend API integration** - Complete RESTful API with Express & TypeScript
- ✅ **PostgreSQL Database** - Full relational database with Prisma ORM
- ✅ **JWT Authentication** - Secure token-based authentication with bcrypt
- ✅ **Multi-stage Approval Workflow** - Fully functional approval process
- ✅ **File Upload System** - Document attachments with download/delete
- ✅ **Role-Based Access Control** - Admin, Dept Head, Procurement, Finance, Staff
- ✅ **Status History Tracking** - Complete audit trail of all changes
- ✅ **Comment System** - Collaborative commenting on requests
- ✅ **Dashboard Analytics** - Real-time statistics and charts

## 🔮 Future Enhancements

Potential features for future development:
- Real-time notifications (WebSocket/Server-Sent Events)
- Email notifications at workflow stages
- Advanced reporting and export (PDF, Excel)
- Budget tracking and forecasting
- Vendor management system
- Purchase order generation
- Inventory integration
- Mobile app (React Native)
- Multi-language support
- Advanced search with filters
- Enhanced audit trail viewer

## 📄 License

This project is based on a Figma design available at:
https://www.figma.com/design/rEjGO1OFReCm1PoES74yKn/Hospital-Purchase-Request-App
