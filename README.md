# StackLite Community Hub

A community-driven question and answer platform inspired by Stack Overflow, built using modern web technologies.

---

## Description

StackLite aims to provide a space for developers and tech enthusiasts to ask questions, share knowledge, and collaborate on solutions. It utilizes Firebase for authentication and MongoDB as its primary database. The frontend is built with React, powered by Vite.

---

## Features

*   **User Authentication:** Sign up, Login, Logout
*   **Questions:** Ask questions with tags, Answer questions
*   **Voting:** Upvote/Downvote questions and answers
*   **Profiles:** View user profiles
*   **Search:** Search functionality for questions
*   **UI:** Theme Toggle (Light/Dark Mode), Responsive Design

---

## Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js) or [yarn](https://yarnpkg.com/)
*   A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account and a cluster set up.
*   A [Firebase](https://firebase.google.com/) project set up.

---

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/adityaFE/stack-overflow.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd stack-overflow
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

---

## Configuration

1.  **Create a `.env` file** in the root directory of the project.
2.  **Add your credentials:** Populate the `.env` file with your specific keys and connection strings obtained from Firebase and MongoDB Atlas.

    *   **Firebase:**
        *   Go to your Firebase project console -> Project Settings -> General.
        *   Find your Web app configuration and copy the required values.
    *   **MongoDB:**
        *   Go to your MongoDB Atlas dashboard -> Database -> Connect -> Drivers.
        *   Copy your connection string (replace `<password>` and specify the database name).

    Your `.env` file should follow this structure:

    ```env
    # Firebase Configuration
    VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
    VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
    VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
    VITE_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
    VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
    VITE_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID

    # MongoDB Configuration
    MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
    ```

    **Important:**
    *   Ensure your MongoDB connection string includes the database name (e.g., `...mongodb.net/stacklite-db?retryWrites=true&w=majority`).
    *   Whitelist your IP address in MongoDB Atlas Network Access settings.

---

## Running the Application Locally

Once installation and configuration are complete:

```bash
npm run start:dev 
```

---

## Deployed Link

 https://stack-lite.netlify.app/