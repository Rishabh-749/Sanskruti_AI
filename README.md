# 🕉️ Sanskruti AI

<div align="center">

### AI-Powered Interactive Cultural Heritage Platform

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React%2019%20%2B%20TypeScript-3178C6?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/AI-Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/UI-Three.js%20%7C%20Tailwind-000000?style=for-the-badge&logo=threedotjs&logoColor=white" />
</p>

*A deeply immersive full-stack platform leveraging cutting-edge Generative AI, 3D Rendering, and interactive geospatial mapping to explore, preserve, and understand ancient traditions, scriptures, and lineages.*

**React 19 • TypeScript • Node.js • Express • MongoDB • Google Gemini AI • Three.js**

</div>

---

## 📖 About the Project

**Sanskruti AI** is an enterprise-grade, full-stack cultural preservation and exploration platform. It seamlessly bridges ancient wisdom with modern technology. By integrating advanced **Large Language Models (LLMs)**, **Voice APIs**, and **3D interactive visualizations**, the platform provides an unparalleled educational and exploratory experience.

From decoding complex scriptures using AI to visualizing mythological family trees and navigating a cosmic-themed cultural map, Sanskruti AI pushes the boundaries of how heritage is consumed in the digital age. It is meticulously engineered to showcase scalable architectural patterns, robust REST API design, and highly complex frontend state management.

---

## 🌿 Why Sanskruti AI?

Preserving cultural nuances often relies on static text or disconnected media. 
**Sanskruti AI** solves this by unifying interactive education, gamification, and AI-driven personalized learning into a single cohesive ecosystem. It demonstrates the ability to handle high-level engineering challenges required by top-tier tech organizations (FAANG/MANG):
- **Complex Full-Stack MVC Architecture**
- **AI/LLM Prompt Engineering & Contextual Integration**
- **Rich Interactive UIs (WebGL, Canvas, Interactive Maps, Graph Nodes)**
- **Secure Authentication & Role-Based Access Control (RBAC)**

---

# ✨ Key Features

### 🧠 AI Scripture Explainer & Voice QA
- Deep-dive contextual explanations of ancient texts powered by the **Google Gemini API**.
- **Voice API integration** for natural, conversational Q&A about historical and mythological events.
- Dynamic cultural recommendations based on user interactions.

### 🌌 Interactive Storyverse & Cultural Map
- Immersive **3D Cosmic visualizations** and Loka Maps powered by **Three.js** and **React Three Fiber**.
- Geospatial mapping of historical events and ancient temples utilizing **Leaflet**.
- Rich **Storyverse** rendering mythological tales with modern interactive UX/UI.

### 🧬 Lineage & Family Trees
- Complex interactive graph node rendering utilizing **React Flow**.
- Visualizing intricate mythological and historical genealogies dynamically.

### 📅 Festival Engine & Dharmic Calendar
- Highly accurate algorithmic calendar tracking lunar/solar events.
- Real-time event tracking, automated notifications, and deep cultural significance breakdowns.

### 🎮 Gamification & Reels
- **Knowledge Capsules**: Bite-sized, highly engaging historical insights.
- **Quizzes**: State-driven gamified assessments with real-time scoring.
- **Cultural Reels**: Infinite-scroll short-form video content implementation.

### 👑 Admin Dashboard & Contributor Ecosystem
- Full **Role-Based Access Control (RBAC)** for administrators.
- Comprehensive user contribution and moderation pipeline.
- Advanced analytics and data management suite.

---

# 🏗️ Architecture Overview

```text
                    ┌──────────────────────────────────────────┐
                    │          React 19 + TypeScript           │
                    │   (Zustand, Three.js, GSAP, Tailwind)    │
                    └────────┬───────────────────────┬─────────┘
                             │                       │
                     REST API & Auth             LLM Prompts
                             │                       │
             ┌───────────────▼───────────────┐       ▼
             │       Node.js + Express       │   Google Gemini
             │      (REST APIs, JWT, RBAC)   │       API
             └────────┬──────────────┬───────┘
                      │              │
                      ▼              ▼
                 MongoDB          Cloudinary
               (Mongoose)       (Media Storage)
```

---

# ⚡ Technology Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend Core** | React 19, TypeScript, Vite, React Router DOM |
| **State & Fetching** | Zustand, TanStack React Query |
| **UI & Styling** | Tailwind CSS, shadcn/ui, Radix UI, Framer Motion, GSAP |
| **Graphics & Maps** | Three.js, React Three Fiber, Leaflet, React Flow, Recharts |
| **Backend Core** | Node.js, Express, TypeScript |
| **Database & ORM** | MongoDB, Mongoose |
| **AI Integration** | Google Generative AI (Gemini) |
| **Auth & Security** | JWT, bcryptjs, Supabase *(hybrid usage)* |
| **Storage** | Cloudinary, Multer |

---

# 🚀 Project Highlights

- ✅ **Enterprise-Grade AI Integration** with contextual memory and Voice QA functionality.
- ✅ **High-Performance 3D Rendering** using WebGL/Three.js natively inside React.
- ✅ **Role-Based Access Control (RBAC)** with secure Admin Dashboards.
- ✅ **Complex Graph Rendering** for interactive family trees using React Flow.
- ✅ **Geospatial Mapping** for accurate and interactive cultural geography.
- ✅ **Modern "Reels" Video Implementation** handling optimized media streams.
- ✅ **Robust Backend APIs** with structured error handling, middlewares, and data validation (Zod).

---

> # 📂 Project Structure

```text
SanskrutiAI/
│
├── 📁 Frontend/                   # React 19 SPA
│   ├── 📁 src/
│   │   ├── 📁 components/         # 3D, canvas, cosmic, lokaMap, ui
│   │   ├── 📁 pages/              # AdminDashboard, ScriptureExplainer, Auth, etc.
│   │   ├── 📁 store/              # Zustand global state management
│   │   ├── 📁 hooks/              # Custom React hooks
│   │   ├── 📁 lib/                # Utility and API clients
│   │   └── 📁 types/              # Strict TypeScript interfaces
│   └── package.json
│
├── 📁 backend/                    # Node.js / Express API
│   ├── 📁 src/
│   │   ├── 📁 controllers/        # Core business logic
│   │   ├── 📁 models/             # Mongoose database schemas
│   │   ├── 📁 routes/             # admin, user, scripture, story, etc.
│   │   ├── 📁 middlewares/        # Auth, upload, and error handling
│   │   └── 📁 utils/              # Helper functions
│   └── package.json
└── README.md
```

---

# ⚙️ Application Flow

Sanskruti AI is designed to be deeply interactive, minimizing friction between the user and ancient knowledge while handling complex asynchronous operations smoothly.

### Step 1 — Authentication & Authorization
Users securely sign up/login via JWT-based authentication. The system immediately validates credentials and identifies user roles. 
- Standard users are routed to the immersive cultural hub.
- Administrators are granted access to the secure `/admin` dashboard for content and user moderation.

### Step 2 — Exploring the Cosmos
The entry point features stunning **Three.js** cosmic representations. Users can navigate through the **Dharmic Calendar**, view ongoing events via the **Festival Engine**, or explore geographical historical sites via the **Cultural Map**.

### Step 3 — AI & Scripture Interaction
When exploring the **Scripture Explainer** or utilizing **Voice QA**:
1. The user inputs a query via text or voice (utilizing Web Speech APIs).
2. The frontend triggers a streamlined request to the backend or directly interfaces with the **Google Gemini API**.
3. Advanced context-aware prompt engineering injects historical framing into the request.
4. Data is parsed and beautifully rendered back to the user with actionable references.

---

# 🔗 Backend API & Core Modules

The Express backend follows a clean MVC architectural pattern, exposing strictly typed and highly optimized REST APIs.

### 🛡️ Admin & User Modules
- **Authentication**: `POST /auth/login`, `POST /auth/register` (Bcrypt hashing, secure JWT issuance).
- **Admin Dashboard**: Aggregates platform statistics, handles moderation of user-submitted content (`contribution.route.ts`), and manages user roles.

### 📚 Knowledge & Scripture Modules
- **Scripture Routes**: Fetches, parses, and serves ancient texts and their AI-generated contextual explanations.
- **Story Routes**: Serves mythological narratives formatted specifically for the frontend **Storyverse** renderer.

### 🎭 Interactive Modules
- **Quiz Routes**: Serves gamified quiz data, tracks user scores securely, and handles leaderboards.
- **Reel Routes**: Manages infinite-scrolling short-form video metadata, fetching optimized assets from Cloudinary.
- **Festival Routes**: Serves dynamic dates and metadata for the Dharmic Calendar.

---

# 🧠 AI Pipeline Implementation

The AI implementation goes far beyond standard chat interfaces:
1. **Context Injection**: When a user asks about a specific scripture, the system injects vast historical and cultural context into the prompt before sending it to the LLM.
2. **Format Enforcement**: The LLM is strictly instructed to return data in specific formats (JSON/Markdown) that the frontend easily parses into interactive UI components.
3. **Voice to Knowledge**: Leverages browser audio APIs and backend processors to transcribe user voice, send intelligent queries to the LLM, and synthesize the response back to audio.

---

# 🚀 Getting Started & Installation

## Prerequisites
Ensure your development environment meets the following requirements:
- **Node.js** (v18+ recommended)
- **MongoDB** (Local instance or MongoDB Atlas URI)
- **Cloudinary Account** (For media uploads and Reel storage)
- **Google Gemini API Key**

---

# 💻 Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd SanskrutiAI
```

### 2. Backend Setup
Open a terminal and navigate to the backend directory:
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory and add your keys:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```
Run the backend server:
```bash
npm run dev
```
*The API will run on `http://localhost:5000`*

### 3. Frontend Setup
Open a **new terminal** and navigate to the frontend directory:
```bash
cd Frontend
npm install
```
Create a `.env.local` file in the `Frontend` directory:
```env
VITE_API_URL=http://localhost:5000/api
VITE_GEMINI_API_KEY=your_google_gemini_key
```
Run the frontend application:
```bash
npm run dev
```
*The App will run on `http://localhost:5173`*

---

# 👑 Admin Dashboard Access

For evaluators, recruiters, and new developers, use the following credentials to access the fully-featured **Admin Dashboard**. This portal includes analytics, content moderation, and complete user management capabilities.

- **Admin Login Route**: Navigate to the Auth page or `/admin`
- **Email**: `rishabhjagtap@gmail.com`
- **Password**: `12345678`

*(Note: These are seeded credentials for demonstration and portfolio review purposes.)*

---

# 🔮 Future Roadmap

- **Multi-Language Support**: Expanding AI models to translate scriptures and UI into regional languages dynamically.
- **WebXR Integration**: Transitioning the Three.js cosmic views into full Virtual Reality (VR) experiences for headsets.
- **Social Ecosystem**: Expanding the user contribution features to allow peer-to-peer discussions and community forums.
- **Mobile Application**: Porting the React frontend to React Native for native iOS/Android distribution.

---

# 🤝 Contributing

Contributions are welcome to help preserve cultural heritage!
1. Fork the project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

# 👨‍💻 Author

<div align="center">

## **Rishabh Jagtap**

**Full Stack Developer | AI Integration Specialist | UI/UX Enthusiast**

Showcasing enterprise-level architecture, complex frontend systems (WebGL, AI, Maps), and scalable backend APIs.

### Connect With Me

🐙 **GitHub:** [github.com/Rishabh-749](https://github.com/Rishabh-749)  
💼 **LinkedIn:** [linkedin.com/in/rishabh-jagtap-9971b0312/](https://www.linkedin.com/in/rishabh-jagtap-9971b0312/)  

</div>

---

<div align="center">
If this project impresses you, consider giving it a ⭐ on GitHub!
</div>
