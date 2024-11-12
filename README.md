# PageNest

PageNest is a Notion-inspired note-taking app designed to provide a smooth and flexible experience for users to capture, organize, and manage their notes. Leveraging the power of Convex for a scalable backend and Clerk for authentication, this app lets users focus on content creation while seamlessly handling data persistence and security.

---

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Configuration](#configuration)
   - [Running the Development Server](#running-the-development-server)
3. [Scripts](#scripts)
4. [Environment Variables](#environment-variables)
5. [Deployment](#deployment)
6. [License](#license)

---

## Features

- **Rich Text Editor** for detailed notes with customizable formatting
- **Flexible Organization** to structure notes and ideas
- **User Authentication** through Clerk for secure access
- **Real-Time Data Sync** with Convex as the backend
- **Responsive Design** for access on both desktop and mobile devices

---

## Getting Started

To set up and run **PageNest** on your local machine, follow these steps:

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js) or **yarn** as the package manager
- **Convex CLI** installed globally for backend development (`npm install -g convex`)

### Installation

1. **Clone the Repository**
    ```bash
    git clone soon
    cd pagenest
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

### Configuration

1. **Environment Variables**

   Create a `.env` file in the root of the project with the following keys:

   ```
   # Deployment used by `npx convex dev`
   CONVEX_DEPLOYMENT=dev:xxxxxxxxxx # replace with your specific deployment id

   NEXT_PUBLIC_CONVEX_URL=https://xxxxxxxx.convex.cloud # replace with your Convex URL

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx # replace with your Clerk publishable key
   CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx # replace with your Clerk secret key

   EDGE_STORE_ACCESS_KEY=xxxxxxxxxxxxxxxxxxxx
   EDGE_STORE_SECRET_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

   Replace each `xxxx` with the respective keys provided in your Convex and Clerk accounts.

### Running the Development Server

To start the development environment, run the following commands in separate terminals:

```bash
npm run dev            # Starts the Next.js frontend
npx convex dev         # Starts the Convex backend server
```

This will start the frontend server at `http://localhost:3000` and the Convex backend.

---

## Scripts

- ```bash
  npm run dev            # Starts the Next.js development server
  ```
- ```bash
  npx convex dev         # Starts the Convex development server
  ```

## Environment Variables

For successful configuration, set up the following variables in your `.env` file as described above.

---

## Deployment

To deploy PageNest, ensure your project is correctly configured with production keys and deploy Convex and Next.js services to their respective environments.

---

## License

This project is provided for personal viewing and learning purposes only. The code may not be reproduced, modified, or used for any commercial purposes. Unauthorized commercial use, including but not limited to resale or redistribution for profit, is strictly prohibited.
