<div align="center">

# 🕉️ S A N S K R U T I   A I 

**B r i d g i n g   A n c i e n t   W i s d o m   &   M o d e r n   I n t e l l i g e n c e**

<br />

<p align="center">
  <img src="https://img.shields.io/badge/React_19-3178C6?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Google_Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
</p>

*An enterprise-grade, immersive digital sanctuary where generative AI, 3D spatial computing, and geospatial mapping breathe life into millennia of cultural heritage.*

<br />

</div>

---

> *"The highest education is that which does not merely give us information but makes our life in harmony with all existence."*

---

## 🌟 THE VISION

**Sanskruti AI** is not just an application; it is a digital renaissance. Designed for scale and built with uncompromising engineering standards, it seamlessly translates the profound depth of ancient traditions, scriptures, and genealogies into a highly interactive, state-of-the-art Web3-ready architecture.

Targeting the engineering rigor expected by top-tier tech organizations (FAANG/MANG), Sanskruti AI demonstrates mastery over **Complex System Architecture**, **LLM Contextual Prompt Engineering**, **WebGL 3D Rendering**, and **Real-Time Data Orchestration**. 

---

## ✨ PILLARS OF INNOVATION

### 🛕 The Divine Oracle *(AI & Voice Integration)*
By harnessing the **Google Gemini LLM**, we've created a contextual, memory-aware intelligence that decodes ancient scriptures. Featuring **Web Speech API integration**, users can engage in natural, voice-driven philosophical discourse.

### 🌌 Cosmic Cartography *(3D Spatial & Mapping)*
Step into the *Storyverse*. Powered by **Three.js** and **React Three Fiber**, the UI breaks the boundaries of 2D planes, offering interactive Loka Maps and cosmic visualizations. Paired with **Leaflet**, we map historical and spiritual monuments with pinpoint geospatial accuracy.

### 🧬 Ancestral Threads *(Graph-Based Lineages)*
Complex mythologies require complex data structures. Utilizing **React Flow**, Sanskruti AI renders intricate genealogies and divine lineages as interactive, deeply traversable node graphs.

### ☸️ The Dharmic Wheel *(Algorithmic Calendar)*
A highly optimized, algorithmically driven festival engine that calculates precise lunar and solar events, offering automated notifications and deep cultural context for every significant date.

### 🎬 Immersive Enlightenment *(Gamification & Media Streams)*
A custom implementation of infinite-scroll **Cultural Reels** (fetching optimized assets via Cloudinary) and state-driven **Knowledge Capsules/Quizzes**, transforming passive reading into active, gamified retention.

### 🛡️ The Sanctum *(Admin & Role-Based Access Control)*
A highly secure, JWT-authenticated dashboard allowing total control over the platform's ecosystem. Features an advanced moderation pipeline for user-contributed content and robust platform analytics.

---

## 🏗️ ARCHITECTURAL MASTERY

Designed using a strict **Model-View-Controller (MVC)** pattern on the backend and a highly modular, hook-driven architecture on the frontend, ensuring infinite scalability and fault tolerance.

```text
 ┌────────────────────────────────────────────────────────────┐
 │                  THE PRESENTATION LAYER                    │
 │    React 19 | Zustand | Three.js | GSAP | Tailwind CSS     │
 └────────────────────────────┬───────────────────────────────┘
                              │
                    REST API (Zod Validation) 
                              │
 ┌────────────────────────────▼───────────────────────────────┐
 │                     THE LOGIC LAYER                        │
 │           Node.js | Express | JWT | Google Gemini AI       │
 └────────────────────────────┬───────────────────────────────┘
                              │
                    Optimized Data Streams
                              │
 ┌────────────────────────────▼───────────────────────────────┐
 │                   THE PERSISTENCE LAYER                    │
 │         MongoDB (Mongoose)  |  Cloudinary (Media)          │
 └────────────────────────────────────────────────────────────┘
```

<br />

| Domain | Core Technologies |
| :--- | :--- |
| **Frontend Foundation** | React 19, TypeScript, Vite, React Router DOM |
| **State Orchestration** | Zustand, TanStack React Query |
| **Aesthetic Design** | Tailwind CSS, shadcn/ui, Radix UI, Framer Motion, GSAP |
| **Spatial & Mapping** | Three.js, React Three Fiber, Leaflet, React Flow |
| **Backend Engine** | Node.js, Express, TypeScript, Zod |
| **Data & Storage** | MongoDB, Mongoose, Cloudinary, Multer |
| **Artificial Intelligence** | Google Generative AI (Gemini) |
| **Security & Auth** | JWT, bcryptjs, Role-Based Access Control (RBAC) |

---

## ⚙️ THE TECHNICAL SYMPHONY

**1. Context-Injected LLM Pipelines**  
When interacting with the Scripture Explainer, the backend dynamically injects dense historical context into the prompt schema before querying Gemini. The LLM is strictly constrained to return structured data (JSON/Markdown), which the frontend parses natively.

**2. Fluid Asynchronous State Management**  
Using Zustand combined with TanStack Query, the frontend handles complex caching, optimistic UI updates, and seamless background fetching, ensuring the 3D canvases and Reels never drop frames.

**3. Robust Data Validation & Security**  
Every API endpoint is shielded by JWT middleware and rigorously typed payload validation (via Zod), ensuring data integrity from the React client down to the MongoDB documents.

---

## 🔮 THE SACRED GATEWAY *(Installation)*

Step into the development ecosystem. Ensure you have **Node.js (v18+)**, a **MongoDB instance**, and your **API Keys** (Cloudinary & Google Gemini).

### 1. Awaken the Backend
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```
```bash
npm run dev
```

### 2. Ignite the Frontend
```bash
cd Frontend
npm install
```
Create a `.env.local` file in the `Frontend` directory:
```env
VITE_API_URL=http://localhost:5000/api
VITE_GEMINI_API_KEY=your_google_gemini_key
```
```bash
npm run dev
```
*Your digital sanctuary is now live at `http://localhost:5173`*

---

## 👑 THE INNER SANCTUM *(Admin Access)*

For recruiters, principal engineers, and system evaluators, step directly into the command center. Experience the RBAC implementation and content moderation pipeline firsthand.

- **Portal:** Navigate to `/admin` or via the Auth interface.
- **Email:** `rishabhjagtap@gmail.com`
- **Password:** `12345678`

---

## 🌌 THE HORIZON *(Future Roadmap)*

- **Multilingual Resonance:** Dynamic, real-time AI translation of scriptures into global regional languages.
- **WebXR Immersion:** Elevating the Three.js cosmic views into full Virtual Reality (VR) environments.
- **Decentralized Knowledge:** Integrating blockchain for immutable records of user-verified historical contributions.
- **Native Ecosystem:** Expanding the React architecture into a React Native cross-platform mobile application.

---

## 👨‍💻 THE ARCHITECT

<div align="center">

### **Rishabh Jagtap**
**Full Stack Developer | AI Integration Specialist | Creative Technologist**

*Forging digital experiences at the intersection of complex scalable architecture, generative AI, and stunning spatial design.*

[GitHub](https://github.com/Rishabh-749) • [LinkedIn](https://www.linkedin.com/in/rishabh-jagtap-9971b0312/)

<br />

**If this fusion of heritage and high-tech resonated with you, consider giving it a ⭐**
</div>
