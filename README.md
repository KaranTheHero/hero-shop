# Hero Shop Website Setup Guide By KTH

Welcome to the **Hero Shop** E-Commerce Website! This guide will help you set up and run the entire project on any PC from scratch.

## 📌 Project Folder Structure
```
Hero Shop/
├─ backend/       # Node.js + MongoDB API (Backend Folder)
│   ├─ package.json    # Backend Dependencies
│   ├─ .env           # Environment Variables
│   └─ .gitignore     # Git Ignore File
├─ frontend/      # HTML + CSS + JS Website (Frontend Folder)
└─ img/           # Images Folder
```

---

## ⚙️ Prerequisites
Make sure the following software is installed on your system:
| Software       | Download Link                         |
|---------------|---------------------------------------|
| Node.js       | https://nodejs.org/                  |
| MongoDB Compass (Optional for Local DB) | https://www.mongodb.com/try/download/compass |
| Git           | https://git-scm.com/downloads        |
| VS Code       | https://code.visualstudio.com/       |

---

## 🔑 Environment Variables Setup
Inside the **backend** folder, create a `.env` file with the following content:

```env
MONGODB_URI=mongodb+srv://Username:Password@Cluster.mongodb.net/db_name?retryWrites=true&w=majority&appName=KaranTheHero
PORT=5000
JWT_SECRET=AssignYourSecret
JWT_EXPIRES_IN=90d
```
✅ **Never share your `.env` file online or upload it to GitHub!**

---

## 📌 Backend Installation
1. Open **Command Prompt/Terminal** inside the `backend` folder.
2. Run the following command to install all backend dependencies:
```bash
npm install express mongoose bcryptjs jsonwebtoken cors dotenv express-validator compression helmet
```
3. Install Development Dependencies for Auto-Restart during Development:
```bash
npm install nodemon --save-dev
```
4. Start the Backend Server using Nodemon for auto-restart during development:
```bash
npm run dev  # For Development Mode with Auto Restart
```
✅ You should see this:
```
MongoDB Connected...
Server running on port 5000
```
If you want to run the server without auto-restart, use:
```bash
npm start
```

---

## 🌐 Frontend Setup
1. Go to the `frontend` folder.
2. Install **Live Server Extension** in VS Code.
3. Right-click on **index.html** → **Open with Live Server**.
4. Make sure the **scripts.js** API endpoints are set correctly:
```js
const endpoints = {
    signup: 'http://localhost:5000/api/auth/signup',
    login: 'http://localhost:5000/api/auth/login'
};
```
5. Refresh your browser, and your website will be up with Signup and Login working.

---

## 🔌 MongoDB Local Setup (Optional)
If you want to run MongoDB locally instead of the cloud, make sure MongoDB is installed and running on:
```
mongodb://localhost:27017/hero-shop
```

---

## 🎯 Running the Website
| Step             | Command            | Folder     |
|----------------|------------------|----------|
| Install Backend | `npm install`   | **backend** |
| Install Dev Dependencies | `npm install nodemon --save-dev` | **backend** |
| Start Backend  | `npm run dev` (Auto Restart) or `npm start` | **backend** |
| Start Frontend | Live Server    | **frontend** |
| Test Signup/Login | http://localhost:5500/signup.html | Browser |

---

## 🚀 Push Your Project to GitHub
To push your **Hero Shop** project folder to GitHub from scratch, follow these steps:
1. Go to https://github.com/ and create a **New Repository**.
2. Open **Command Prompt/Terminal** inside your **Hero Shop** root directory.
3. Configure Git with your username and email (only if using Git for the first time):
```bash
git config --global user.name "YourUsername"
git config --global user.email "youremail@example.com"
```
4. Initialize Git in your project folder:
```bash
git init
```
5. Add all project files to the Git staging area:
```bash
git add .
```
6. Commit the files with a message:
```bash
git commit -m "Initial Project Commit"
```
7. Link your local project with the remote GitHub repository:
```bash
git remote add origin https://github.com/YourUsername/YourRepositoryName.git
```
8. Push your project to GitHub:
```bash
git push -u origin main
```
✅ Your project will now be available on GitHub.

---

## 🔥 Deploy the Website Online
You can deploy your website to:
- **Vercel**: https://vercel.com/
- **Heroku**: https://www.heroku.com/
- **Render**: https://www.render.com/

---

## 💪 Final Notes
✅ This guide is **1000% Tested and Working**.
If you follow each step, your **Hero Shop Website** will work perfectly on any PC.

---
