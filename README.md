🚀 AI UI Generator

An AI-powered web application that generates React UI code from natural language prompts.
The project uses a full-stack architecture with a React frontend and an Express backend connected to a Large Language Model (LLM).

✨ Features

🔤 Generate React UI components from plain English prompts

🧠 AI-powered backend using an LLM (via Groq API)

🧩 Live code preview and generation history

⏪ Snapshot-based rollback system

🌐 Fully deployed (Frontend + Backend)

🔐 Secure API key handling (no keys exposed in frontend)

🏗️ Tech Stack
Frontend

React

TypeScript

Vite

Axios / Fetch (for API communication)

Backend

Node.js

Express

Groq LLM API

Deployment

Frontend: Railway

Backend: Railway

📁 Project Structure
ai-ui-generator-stack
├── ai-ui-generator   # Frontend (React + Vite)
└── server            # Backend (Express API)

⚙️ How It Works

The user enters a UI description (e.g., “Create a navbar with Home and About buttons”).

The frontend sends the prompt to the backend API.

The backend forwards the prompt to the LLM.

The LLM generates React UI code.

The frontend displays the generated code and preview.

🌍 Live Deployment

Frontend: Deployed on Railway

Backend API: Deployed on Railway

The backend is API-only, so opening the backend URL directly may show
Cannot GET / — this is expected behavior.

🛠️ Local Development
1️⃣ Clone the repository
git clone https://github.com/your-username/ai-ui-generator-final.git
cd ai-ui-generator-final

2️⃣ Setup Backend
cd server
npm install


Create a .env file:

GROQ_API_KEY=your_api_key_here


Start the backend:

npm start


Backend runs on:

http://localhost:3001

3️⃣ Setup Frontend
cd ../ai-ui-generator
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🧪 Example Prompts
Create a navbar with title "My App" and buttons Home, About, Contact

Create a login page with email and password inputs and a submit button

Create a dashboard layout with a sidebar and main content area

🔐 Security Notes

API keys are stored only on the backend

No secrets are exposed to the client

Environment variables are used for production deployment

🧠 Learnings

Handling AI API integrations securely

Deploying a monorepo with multiple services

Debugging real-world production build issues

Managing frontend–backend communication in production

Shreyak

