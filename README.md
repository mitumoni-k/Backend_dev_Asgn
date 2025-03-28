# 🚀 Project Name
## -> User-Profile-API-Assignment

## 📚 Overview

This project is a **user authentication and profile management API** developed as part of a backend developer internship assignment. It is built using **Node.js, Express, and MongoDB**, with **JWT authentication**.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (using Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **Environment Variables:** dotenv
- **Password Hashing:** bcrypt.js

---

## 📚 Folder Structure

```
/root-server
│── /config
│   ├── db.js                    # Database Configuration
│── /controllers
│   ├── userController.js        # Business logic
│── /middleware
│   ├── authMiddleware.js        # Middleware functions
│── /models
│   ├── /user.js                 # User Schema
│── /routes
│   ├── userRoutes.js            # API routes
│── package.json
│── package-lock.json
│── .env                         # Environment variables
│── README.md                    # This file
│── server.js                    # Main entry point
```

---

## 🛠️ Setup & Installation

### 1️⃣ **Clone the Repository**

```sh
git clone <repository-url>
cd <project-folder>
```

### 2️⃣ **Install Dependencies**

```sh
npm install
```

### 3️⃣ **Set Up Environment Variables**

Create a `.env` file in the root directory and add:

```
MONGO_URI=MONGO_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>
JWT_SECRET=Your_JWT_SECRET_KEY
```

---

## 🗄️ Database Setup (MongoDB Atlas)

This project uses **MongoDB Atlas**, a cloud-based NoSQL database. Follow these steps to set it up:

### 1️⃣ Create a MongoDB Atlas Account & Cluster
1. Go to **[MongoDB Atlas](https://www.mongodb.com/atlas/database)** and sign up.
2. Click on **"Create a Cluster"** (Select **Shared** for free usage).
3. Choose a **cloud provider & region** (AWS, GCP, or Azure).
4. Click **Create Cluster** (This may take a few minutes).

### 2️⃣ Set Up Database & User Access
1. In the **MongoDB Atlas Dashboard**, go to **Connect**.
2. Click **"Add a Database User"** → Set:
   - **Username:** `username`
   - **Password:** `password` *(use a secure password)*
   - **Role:** `Read and Write to any database`
3. Click **Network Access → Add IP Address** → Allow **`0.0.0.0/0`** (or specify your IP).

### 3️⃣ Get Your Connection String
1. Go to **Clusters** → Click **"Connect"** → Select **"Connect your application"**.
2. You can select **MongoDB Compass** to visualise it locally as well. 
2. Copy the **MongoDB URI**:

   ```sh
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/
   ```

### 4️⃣ Configure Your Project
1. Open your project folder and create a `.env` file.
2. Add the **MongoDB URI**:

   ```sh
   MONGO_URI=MONGO_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>
   ```

   - **Note:** The `userProfiles` database(if given this as database-name) will be created automatically when a user is added.

### 5️⃣ Ensure Automatic Collection Creation
- The **users** collection will be automatically created when the first document is inserted.
- This happens because **Mongoose models automatically create collections** in MongoDB if they don’t exist.
- Example: If you register a new user via the API, it will insert a document in the **`users` collection inside `userProfiles` database`**.

### 🚀 Final Steps
1. Run the project:

   ```sh
   npm run dev
   ```

2. Register a user using:

   ```http
   POST /api/v1/register
   ```

3. Your **MongoDB database, userProfiles, and users collection** will be created automatically when the first user is registered! 🎉

---

## 🚀 API Endpoints Documentation

For detailed API request/response examples, refer to the **Postman Documentation**:  
📌 [Postman Collection Link](https://documenter.getpostman.com/view/29624111/2sAYkLoHoA)

### 🔹 User Authentication

| Method | Endpoint            | Description       | Auth Required |
|--------|---------------------|-------------------|--------------|
| POST   | `/api/v1/register` | Register new user | ❌           |
| POST   | `/api/v1/login`  | Authenticate user | ❌           |

### 🔹 Profile Management

| Method | Endpoint             | Description         | Auth Required |
|--------|----------------------|---------------------|--------------|
| GET    | `/api/v1/retrieveprofile` | Get user profile   | ✅           |
| PUT    | `/api/v1/updateprofile` | Update user profile | ✅           |

For full request/response formats, check the Postman documentation linked above. 🚀

### 🔹 Set Environment Variables

- **Base URL:** `http://localhost:8080`
- **Auth Token:** JWT Token received from login

---

## 🔧 Deployment Guide (Optional)

For production, set up a **MongoDB Atlas** database and deploy the app using:

- **Heroku**
- **Vercel**
- **DigitalOcean**
- **Render** (recommended for free hosting)

---

🚀 **Happy Coding!**

