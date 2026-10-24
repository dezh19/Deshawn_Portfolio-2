# GPHC Form-System

Enterprise Forms Management System for **Georgetown Public Hospital Corporation (GPHC)**, Guyana.

Digitizes paper/PDF hospital forms with multi-step approval workflows, SLA tracking, role-based access, and administration.

## Features

- **8 Digital Fillable Forms** — Submit via 4-step wizard interface with draft support
- **17 PDF Forms** — View and download original hospital forms
- **8 Roles** — ADMIN, SUBMITTER, APPROVER, DIRECTOR, AUDITOR, CEO_APPROVER, TECHNICAL_REVIEWER, TECHNICAL_APPROVER
- **Multi-Step Approval Workflows** — Asset Condemnation (7-step) and Non-Inventory Request (5-step + optional CEO)
- **Pool-Based Approval** — Any user with the same role + department can act on pending steps
- **Cost-Based Routing** — Forms over $150,000 GYD require CEO approval
- **SLA Tracking** — Configurable per template with countdown timers and breach alerts
- **On Hold** — EPMU officer can hold/release non-inventory forms during review
- **Edit & Resubmit** — Rejected forms can be resubmitted with corrections
- **Analytics Dashboard** — KPIs, trends, SLA compliance, activity feed
- **Notifications** — Real-time with sound alerts (Web Audio API)
- **Global Search** — Template-aware form and template search with keyboard navigation
- **File Attachments** — Upload, download, delete supporting documents
- **Signature Capture** — Digital signatures for approval steps
- **PDF Export** — Browser-native print with clean output
- **Dark/Light Mode** — Full theme support

## Architecture

```
┌──────────────────────────┐
│     React 18 + Vite      │
│   Tailwind CSS + shadcn  │
│      (Frontend)          │
│   http://localhost:5173  │
└───────────┬──────────────┘
            │ HTTP / JWT
┌───────────▼──────────────┐
│   Express 5 + TypeScript │
│     Zod Validation       │
│      (Backend API)       │
│   http://localhost:3000  │
└───────────┬──────────────┘
            │ Prisma ORM
┌───────────▼──────────────┐
│       PostgreSQL         │
│  11 models, 4 enums      │
│      (Database)          │
└──────────────────────────┘
```

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React 18.3.1, TypeScript 5.9.3, Vite 6.4.1, Tailwind CSS 4.1.12 (oklch), shadcn/ui, Radix UI |
| UI Libraries | React Hook Form 7.55.0, Recharts 2.15.2, date-fns 3.6.0, Sonner 2.0.3, Lucide React 0.487.0, React DnD 16.0.1 |
| Backend | Node.js, Express 5.2.1, TypeScript 5.9.3, Prisma 6.19.2 |
| Validation | Zod 4.3.6 |
| Security | JWT (jsonwebtoken), bcryptjs 3.0.3, Helmet, CORS, express-rate-limit (4-tier) |
| File Uploads | Multer 2.0.2 |
| Database | PostgreSQL |
| Testing | Vitest 4.0.18 + Testing Library (frontend), Jest 30.2.0 + ts-jest (backend) |

## Approval Workflows

### Form Status Lifecycle

```
DRAFT → SUBMITTED → IN_REVIEW → [ON_HOLD] → APPROVED / REJECTED → ARCHIVED
```

### Asset Condemnation (7 steps)

```
Submitter → Department HOD → Technical Reviewer → Technical HOD
         → Audit Verification → Audit Director → Finance Director → APPROVED
```

### Non-Inventory Request (5 steps + optional CEO)

```
Submitter → HOD → Director → EPMU Review → Stores Processing → Auto-Archive
                                  ↓                                    ↓
                          [Forward to CEO]                    Procurement (view-only)
                          [Put on Hold]
```

- **EPMU submitters** get a shortened 3-step workflow (HOD+Director combined, skip EPMU review)
- **Stores** is pool-based — Central Store and Dietary Stores APPROVERs are interchangeable
- **CEO forwarding** creates a sub-step during EPMU review for forms over $150K GYD
- **On Hold** allows EPMU to pause review with a required comment

## Business Rules

| Rule | Details |
|------|---------|
| Currency | GYD (Guyanese Dollars) |
| CEO Threshold | $150,000 GYD — triggers CEO approval |
| SLA | Configurable per template, default 72 hours |
| Reference Numbers | `GPHC-YYYY-NNNNNN` (auto-generated) |
| Pool-Based Approval | Any user with same role + department can act on pending steps |
| Self-Approval Prevention | Users cannot approve their own submissions |
| Role Fallback | AUDITOR serves as APPROVER fallback for departments without an APPROVER |
| Rejected Forms | Can be edited and resubmitted (old approvals cleared) |

## Project Structure

```
Form-System/
├── frontend/                  # React + TypeScript + Vite
│   ├── src/app/components/    # 31 feature components + ui/ (33 shadcn)
│   ├── src/app/context/       # AuthContext, AppContext, ThemeContext
│   ├── src/app/utils/         # API client, form templates, PDF export
│   ├── src/services/          # 12 API service modules
│   └── src/types/             # Shared TypeScript types
├── backend/                   # Node.js + Express + Prisma
│   ├── src/controllers/       # 13 controllers
│   ├── src/services/          # 12 services
│   ├── src/routes/            # 14 route files (16 mount points)
│   ├── src/middleware/        # Auth, validation, rate limiting, uploads
│   ├── src/validators/        # 13 Zod schema files
│   └── prisma/                # Schema (11 models) + seed data
├── docs/                      # Documentation
└── .claude/                   # AI assistant config (commands, agents, rules)
```

## Team

| Name | Role |
|------|------|
| Akeem Kippins | Backend + Frontend |
| Deshawn Mitchell | Frontend + Backend + ux design + major testing and rollout  |

## License

Proprietary software for Georgetown Public Hospital Corporation.
