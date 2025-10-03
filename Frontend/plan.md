🖥️ Frontend Plan
Tech stack

React + Vite (lightweight, fast, modern)

Tailwind (optional for clean UI quickly)

Minimal Features:

Login/Register Form

Hit your /api/auth/register and /api/auth/login endpoints

Store JWT in localStorage

File Upload Page

Simple drag/drop or file input → POST /api/files/upload

Show list of uploaded files (GET /api/files)

Sharing UI

Click “Share” → input another user’s email → POST /api/share/:fileId

Show who has access to your files

📂 Suggested Frontend Structure
frontend/
├── public/
├── src/
│   ├── api/                 # Axios configs, API calls
│   │   ├── auth.js
│   │   ├── files.js
│   │   └── share.js
│   │
│   ├── components/          # Reusable UI
│   │   ├── Navbar.jsx
│   │   ├── FileUpload.jsx
│   │   └── FileList.jsx
│   │
│   ├── pages/               # Route-level pages
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── App.jsx              # Routes + state handling
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js

🛠️ DevOps/Infra Angle for Frontend

Dockerize frontend (Dockerfile)

Use nginx container to serve built React app

Deploy alongside backend in docker-compose.yml

CI/CD → build frontend → push to Docker Hub → deploy


⚡ Flow of your project when demoed:
React Frontend → Express Backend API → RDS DB + S3 Storage
                 (Dockerized, deployed via CI/CD & Terraform)


