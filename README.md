# 🗣️ Customer Feedback System

A full-stack web application for collecting and managing customer feedback, built with React, Node.js, Express, and MySQL.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Uploading to GitHub](#uploading-to-github)

---

## ✨ Features

- User Registration & Login (JWT Authentication)
- Users can submit and edit their own feedback
- Admin Dashboard with full CRUD (Create, Read, Update, Delete)
- Role-based access control (user / admin)
- MySQL database integration
- Protected routes on frontend

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, React Router DOM, Axios, CSS |
| Backend | Node.js, Express.js |
| Database | MySQL |
| Auth | JWT (JSON Web Tokens), bcryptjs |

---

## 📁 Project Structure

```
Customer-Feedback-System/
├── backend/
│   ├── routes/
│   │   ├── auth.js
│   │   └── feedback.js
│   ├── .env
│   ├── createAdmin.js
│   ├── database.js
│   ├── package.json
│   └── server.js
└── frontend/
    ├── public/
    └── src/
        ├── components/
        │   └── PrivateRoute.js
        ├── context/
        │   └── AuthContext.js
        ├── pages/
        │   ├── AdminDashboard.js
        │   ├── AdminDashboard.css
        │   ├── Auth.css
        │   ├── Feedback.js
        │   ├── Feedback.css
        │   ├── Login.js
        │   └── Register.js
        ├── App.js
        └── index.js
```

---

## ✅ Prerequisites

Make sure you have the following installed before starting:

- [Node.js](https://nodejs.org/) (v18 or above)
- [MySQL](https://www.mysql.com/) (v8 or above)
- [Git](https://git-scm.com/)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/customer-feedback-system.git
cd customer-feedback-system
```

### 2. Setup MySQL Database

Open MySQL Workbench or MySQL command line and run:

```sql
CREATE DATABASE customer_feedback;
```

### 3. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```
PORT=5000
JWT_SECRET=your_secret_key_123
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password_here
DB_NAME=customer_feedback
```

> ⚠️ Replace `your_mysql_password_here` with your actual MySQL password.

### 4. Create Admin User

```bash
node createAdmin.js
```

You should see:
```
✅ Admin user created successfully!
Username: admin
Password: admin123
```

### 5. Setup Frontend

```bash
cd ../frontend
npm install
```

---

## ▶️ Running the App

You need **two terminals open at the same time**:

### Terminal 1 — Start Backend

```bash
cd backend
node server.js
```

Expected output:
```
Server running on port 5000
Connected to MySQL database.
Users table ready.
Feedback table ready.
```

### Terminal 2 — Start Frontend

```bash
cd frontend
npm start
```

App will open at: **http://localhost:3000**

---

## 🚀 Usage

### Regular User
| Action | Details |
|---|---|
| Register | Go to `/register`, fill in details |
| Login | Go to `/login`, use your credentials |
| Submit Feedback | Write feedback and click Submit |
| Edit Feedback | Click Edit Feedback tab and update |
| Logout | Click the Logout button |

### Admin
| Action | Details |
|---|---|
| Login | Username: `admin` / Password: `admin123` |
| View All Feedback | Automatically redirected to Admin Dashboard |
| Edit Any Feedback | Click Edit button on any row |
| Delete Feedback | Click Delete button on any row |
| Logout | Click the Logout button |

---

## 📡 API Endpoints

### Auth Routes — `/api/auth`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

### Feedback Routes — `/api/feedback`

| Method | Endpoint | Access | Description |
|---|---|---|---|
| GET | `/api/feedback/my` | User | Get own feedback |
| POST | `/api/feedback/` | User | Submit feedback |
| PUT | `/api/feedback/:id` | User | Edit own feedback |
| GET | `/api/feedback/all` | Admin | Get all feedback |
| PUT | `/api/feedback/admin/:id` | Admin | Edit any feedback |
| DELETE | `/api/feedback/:id` | Admin | Delete feedback |

---

## 📤 Uploading to GitHub

Follow these steps to upload your project to GitHub:

### Step 1 — Create `.gitignore` file

Create a file called `.gitignore` in the root `Customer-Feedback-System/` folder:

```
# Backend
backend/node_modules
backend/.env
backend/feedback.db

# Frontend
frontend/node_modules
frontend/build
```

> ⚠️ Never upload `node_modules` or `.env` to GitHub!

### Step 2 — Create GitHub Repository

1. Go to [https://github.com](https://github.com)
2. Click **"New"** or **"+"** → **"New repository"**
3. Name it: `customer-feedback-system`
4. Set to **Public** or **Private**
5. Do NOT check "Add README" (we already have one)
6. Click **"Create repository"**

### Step 3 — Initialize Git in your project

Open terminal in your root project folder:

```bash
cd C:\Users\sjha6\Customer-Feedback-Sysytem
git init
git add .
git commit -m "Initial commit - Customer Feedback System"
```

### Step 4 — Connect to GitHub and Push

```bash
git remote add origin https://github.com/your-username/customer-feedback-system.git
git branch -M main
git push -u origin main
```

> ⚠️ Replace `your-username` with your actual GitHub username.

### Step 5 — Verify

Go to your GitHub repository URL and confirm all files are uploaded. You should see:
- `backend/` folder
- `frontend/` folder  
- `README.md`
- `.gitignore`

### Future Updates

Whenever you make changes, run:

```bash
git add .
git commit -m "describe your changes here"
git push
```

---

## 👤 Default Admin Credentials

```
Username: admin
Password: admin123
```

> ⚠️ Change these credentials in production!

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
