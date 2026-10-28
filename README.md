# MERN Lab Task 1 — CRUD Operations on Items

A simple Item Management application using HTML, CSS, JavaScript, Node.js, Express.js, REST API routes, and a JavaScript array.

## Features

- **Create:** Add a new item with name and price.
- **Read:** Display all items in a table.
- **Update:** Edit an existing item's name or price.
- **Delete:** Remove an item after confirmation.

## Requirements

Install these on your computer:

1. **Node.js (LTS)** — includes npm.
2. **Visual Studio Code** or another code editor.
3. A web browser.

Python alone is not sufficient to run this Express.js project. No separate database is needed.

## Run locally

1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Open a terminal in the folder containing `package.json`.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the server:

   ```bash
   npm start
   ```

6. Open <http://localhost:3000> in your browser.

Do not open `public/index.html` directly. The page must be served by Express so it can call the API.

## REST API endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/items` | Get all items |
| POST | `/api/items` | Add an item |
| PUT | `/api/items/:id` | Update an item |
| DELETE | `/api/items/:id` | Delete an item |

## Initial data

The app starts with two items:

| ID | Name | Price |
|---:|---|---:|
| 1 | Book | 250 |
| 2 | Pen | 25 |

## Important note

The array is stored in server memory. Changes are temporary and will reset when the server restarts. This is intentional for the lab task, which asks for an array rather than a database.

## Upload to GitHub

1. Create a new repository on GitHub.
2. Extract this project ZIP.
3. Open the extracted folder in VS Code.
4. Use GitHub Desktop, or run the following commands in the project folder after Git is installed and configured:

   ```bash
   git init
   git add .
   git commit -m "Add MERN Lab Task 1 CRUD application"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPOSITORY_URL
   git push -u origin main
   ```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the URL of your own empty GitHub repository. Do not upload `node_modules`; it is excluded by `.gitignore`.
