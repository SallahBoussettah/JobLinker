# 📌 Project Plan: Job Matching Platform

## 🧠 Project Name (Working Title)

**JobLinker** – A smart and friendly platform that connects job seekers and employers through automated CV matching, interest profiling, and powerful filtering by experience and skills.

---

## 🎯 Vision & Purpose

To empower unemployed individuals and career seekers by giving them a personalized digital space to showcase their abilities, while enabling directors and employers to find the most relevant candidates effortlessly through an intelligent matching system.

---

## 👥 Target Users

### Job Seekers:

* Unemployed individuals looking to highlight their experience, passions, and capabilities
* Freelancers and interns looking for part-time or flexible work
* Fresh graduates entering the job market

### Employers:

* HR teams and hiring managers looking to fill roles efficiently
* Small business owners seeking local talent
* Recruitment agencies sourcing specific profiles

---

## 🧩 Core Features Breakdown

### 🔹 For Job Seekers

1. **User Authentication**

   * Sign up via email or social login (Google, LinkedIn)
   * Secure login with 2FA (optional in future version)

2. **Personal Dashboard**

   * Welcome panel with stats: views, matches, saved jobs
   * Notification area for job matches or employer interest

3. **Profile Builder**

   * Full name, contact info, location
   * Profile photo
   * Education (institution, degree, year)
   * Work experience (role, company, duration)
   * Skills and technologies (tag-based system)
   * Languages spoken
   * Personal interests and hobbies
   * Preferred work type: remote, hybrid, on-site

4. **CV Upload & Generator**

   * Upload custom CV (PDF, DOCX)
   * Built-in CV builder for clean, responsive templates
   * Shareable public link (optional privacy toggle)

5. **Job Discovery**

   * Recommendations based on profile
   * Bookmark and apply directly to job offers

---

### 🔸 For Employers / Directors

1. **User Authentication & Verification**

   * Company email verification + optional domain check
   * Dashboard access only after profile completion

2. **Employer Dashboard**

   * Job offers created
   * Matched candidates with filters
   * Saved/bookmarked profiles
   * Contacted candidates status

3. **Job Offer Creation**

   * Job title, description
   * Required skills and experience
   * Domain/industry (tagged)
   * Contract type (internship, full-time, part-time, freelance)
   * Location or remote availability

4. **Candidate Matching System**

   * Instant display of matched candidates
   * Sort by:

     * Match percentage
     * Years of experience
     * Skill overlap
     * Location and availability

5. **Engagement Tools**

   * Bookmark profiles
   * Invite candidate to apply
   * Direct message (future feature)

---

## 🧮 Matching Algorithm

* **Tag-Based Matching**: Compare job offer tags to profile tags (skills, domain, etc.)
* **Weighted Scoring**:

  * 50% skills
  * 25% experience level
  * 15% location or remote fit
  * 10% interest alignment (optional bonus)
* **Sorting & Filtering**:

  * Top-matched candidates appear first
  * Filters: years of experience, availability, education level

---

## 🛡 Privacy & Permissions

* **Job Seeker Privacy**:

  * CV visibility: public, protected (only for matched offers), private
  * Shareable link control for personal profiles

* **Employer Trust**:

  * Verified company accounts required to contact users or download CVs
  * Admin approval of suspicious accounts

---

## 🎨 Design Requirements

### General Aesthetic

* **Style**: Friendly, modern, and clean
* **Color Themes**: Light & Dark Mode toggle
* **Typography**: Clear, legible fonts (e.g. Inter, Poppins)
* **Layout**: Responsive, minimal clutter

### Pages to Design

1. Landing Page (For all visitors)
2. Sign Up / Login Page
3. Job Seeker Dashboard
4. Employer Dashboard
5. Profile Builder / Editor
6. Job Offer Creation Form
7. CV Viewer (embedded PDF or web-rendered)
8. Admin Panel (simple, clean UI for moderation)

---

## 🧰 Tech Stack Recommendation

### Frontend:

* **Framework**: React
* **Styling**: Tailwind CSS + Shadcn //https://ui.shadcn.com/
* **Routing**: React Router
* **HTTP**: Axios

### Backend:

* **Runtime**: Node.js
* **Framework**: Express
* **Database**: Postgres
* **Authentication**: JWT Authentication

### File Handling:

* **Storage**: Cloudinary or AWS S3 (for CVs, profile pics) // for now everything will be locally for developement

### Hosting: // Plans for later for deployement

* Frontend: Vercel / Netlify
* Backend: Render / Railway / Fly.io

---

## 📅 Roadmap & Timeline

| Phase                      | Duration | Description                                            |
| -------------------------- | -------- | ------------------------------------------------------ |
| 🖌 1. Planning & Design    | 1 week   | Define scope, user flows, full Figma UI (light + dark) |
| ⚛ 2. Frontend Setup        | 1 week   | React project setup, Tailwind theming, routing         |
| 🔧 3. Backend Setup        | 1 week   | Auth routes, job post & CV endpoints                   |
| 🧑‍💼 4. Job Seeker Module | 2 weeks  | Profile builder, CV uploader, dashboard view           |
| 🧑‍💼 5. Employer Module   | 2 weeks  | Job post form, CV search & filter, invite flow         |
| 🧠 6. Matching Engine      | 1 week   | Tag-based matching, filtering logic                    |
| 🧪 7. Testing & QA         | 1 week   | Full platform test, device responsiveness              |
| 🚀 8. Launch               | 1 week   | Deploy, get feedback, iterate                          |

---

## 🪄 Future Features

* AI-generated CV summaries for employers
* Video introduction (upload 30-sec pitch)
* Scheduling calendar for interviews
* In-platform messaging
* Mobile app (React Native)
* Multilingual support (Arabic, French, English)

---

## ✅ Success Metrics

* User registrations (split: seekers vs employers)
* CVs uploaded per day/week
* Job posts created per month
* Employer engagement: bookmarks, invites, contacts
* Match rate accuracy
* DAU/WAU (daily and weekly active users)
* Retention rate after 1 and 3 months

---

## 📁 Deliverables

* ✅ `project-plan.md` (this doc)
* 🧠 Logo (in assets folder)

