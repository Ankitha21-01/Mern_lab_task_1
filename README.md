# MERN Lab Task 1 — CRUD Operations on Items

## Aim
To develop an item management application that performs CRUD operations using HTML, CSS, JavaScript, Node.js, Express.js, REST API routes, and a JavaScript array.

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- REST API

## Features
- **Create:** Add a new item with its name and price.
- **Read:** Display all items in a table.
- **Update:** Edit an existing item's name or price.
- **Delete:** Remove an item after confirmation.

## Requirements
1. Node.js (includes npm)
2. Visual Studio Code or another code editor
3. A web browser

No separate database is required for this lab task.

## How to Run Locally

1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Open a terminal in the folder containing `package.json`.
4. Install the dependencies:

   ```bash
   npm install
   ```

5. Start the server:

   ```bash
   npm start
   ```

6. Open `http://localhost:3000` in your browser.

**Note:** Do not open `public/index.html` directly. The application must run through the Express server so the frontend can communicate with the API.

## REST API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/items` | Retrieve all items |
| POST | `/api/items` | Add a new item |
| PUT | `/api/items/:id` | Update an existing item |
| DELETE | `/api/items/:id` | Delete an item |

## Initial Data

The application starts with two items:

| ID | Name | Price |
|---:|---|---:|
| 1 | Book | 250 |
| 2 | Pen | 25 |

## Output Screenshots

### 1. Item Management Interface
![Item Management](output/item_management.png)

### 2. Adding an Item
![Adding an Item](output/addind_item.png)

### 3. Item Added Successfully
![Item Added](output/item_added.png)

### 4. Item Deleted Successfully
![Item Deleted](output/item_deleted.png)

## Important Note

Items are stored in a JavaScript array in server memory. Changes are temporary and will reset when the server restarts. This is intentional because the lab task uses an array instead of a database.