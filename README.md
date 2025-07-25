# JobLinker

<p align="center">
  <img src="frontend/src/assets/Logo+Title.png" alt="JobLinker Logo" width="300">
</p>

<p align="center">
  <strong>Connect job seekers and employers through intelligent matching</strong>
</p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="#multilingual-support">Multilingual Support</a>
</p>

---

## Overview

JobLinker is a modern job matching platform that connects job seekers and employers through automated CV matching, interest profiling, and powerful filtering by experience and skills. The platform aims to empower unemployed individuals and career seekers by giving them a personalized digital space to showcase their abilities, while enabling directors and employers to find the most relevant candidates effortlessly through an intelligent matching system.

### Target Users

- **Job Seekers**: Unemployed individuals, freelancers, interns, and fresh graduates
- **Employers**: HR teams, hiring managers, small business owners, and recruitment agencies

---

## Features

### For Job Seekers

- **User Authentication**: Sign up via email or social login (Google, LinkedIn)
- **Personal Dashboard**: View stats, matches, and notifications
- **Profile Builder**: Create a comprehensive profile with education, work experience, skills, and preferences
- **CV Upload & Generator**: Upload custom CVs or use the built-in CV builder
- **Job Discovery**: Receive job recommendations based on your profile

### For Employers

- **User Authentication & Verification**: Company email verification for secure access
- **Employer Dashboard**: Manage job offers, matched candidates, and saved profiles
- **Job Offer Creation**: Create detailed job listings with required skills and experience
- **Candidate Matching System**: Find candidates based on match percentage, experience, skills, and location
- **Engagement Tools**: Bookmark profiles and invite candidates to apply

### Matching Algorithm

Our intelligent matching system uses:
- Tag-based matching comparing job offer tags to profile tags
- Weighted scoring based on skills (50%), experience (25%), location (15%), and interests (10%)
- Advanced sorting and filtering options

---

## Tech Stack

### Frontend
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **HTTP Client**: Axios
- **Internationalization**: i18next

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Database**: PostgreSQL
- **Authentication**: JWT

### File Handling
- Local storage for development
- Cloudinary or AWS S3 planned for production

---

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- PostgreSQL (for backend development)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/joblinker.git
cd joblinker
```

2. Install frontend dependencies
```bash
cd frontend
npm install
```

3. Start the frontend development server
```bash
npm run dev
```

4. In a new terminal, set up the backend (once implemented)
```bash
cd ../backend
npm install
npm run dev
```

5. Access the application at `http://localhost:5173`

---

## Project Structure

```
joblinker/
├── frontend/               # React frontend application
│   ├── public/             # Public assets
│   ├── src/
│   │   ├── assets/         # Images, fonts, etc.
│   │   ├── components/     # Reusable UI components
│   │   ├── i18n/           # Internationalization files
│   │   │   └── locales/    # Translation files (en, fr, ar)
│   │   └── ...
├── backend/                # Node.js/Express backend (to be implemented)
└── project-plan.md         # Detailed project plan
```

---

## Roadmap

| Phase | Description | Status |
|-------|-------------|--------|
| 1. Planning & Design | Define scope, user flows, UI design | ✅ |
| 2. Frontend Setup | React project setup, Tailwind theming, routing | 🟡 In Progress |
| 3. Backend Setup | Auth routes, job post & CV endpoints | 📅 Planned |
| 4. Job Seeker Module | Profile builder, CV uploader, dashboard | 📅 Planned |
| 5. Employer Module | Job post form, CV search & filter | 📅 Planned |
| 6. Matching Engine | Tag-based matching, filtering logic | 📅 Planned |
| 7. Testing & QA | Full platform testing | 📅 Planned |
| 8. Launch | Deployment and iteration | 📅 Planned |

---

## Multilingual Support

JobLinker supports multiple languages:
- English
- French
- Arabic (with RTL layout)

---

## Future Features

- AI-generated CV summaries for employers
- Video introductions (30-second pitch)
- Interview scheduling calendar
- In-platform messaging
- Mobile app (React Native)
- Enhanced multilingual support

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## License

[MIT](LICENSE)
