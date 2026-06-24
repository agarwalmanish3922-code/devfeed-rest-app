# devfeed-rest-app
# DevFeed — RESTful Posts App

A full-stack CRUD application built with Node.js and Express, implementing all RESTful routes for managing posts. Features a modern dark UI with EJS templating.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

---

## Features

- Create, read, update, and delete posts
- Full RESTful routing (GET, POST, PATCH, DELETE)
- UUID-based unique resource IDs
- Method override for PATCH/DELETE support in HTML forms
- Modern dark UI with Space Grotesk typography

---

## Tech Stack

| Layer      | Technology            |
|------------|-----------------------|
| Runtime    | Node.js               |
| Framework  | Express.js v5         |
| Templating | EJS                   |
| Styling    | Custom CSS            |
| Packages   | uuid, method-override |

---

## REST API Routes

| Method | Route           | Description     |
|--------|-----------------|-----------------|
| GET    | /posts          | List all posts  |
| GET    | /posts/new      | New post form   |
| POST   | /posts          | Create a post   |
| GET    | /posts/:id      | View a post     |
| GET    | /posts/:id/edit | Edit post form  |
| PATCH  | /posts/:id      | Update a post   |
| DELETE | /posts/:id      | Delete a post   |

---

## Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation

# Clone the repo
git clone https://github.com/agarwalmanish3922-code/devfeed-rest-app.git

# Navigate into the project
cd devfeed-rest-app

# Install dependencies
npm install

# Start the server
node index.js

Open your browser and go to: http://localhost:8080/posts

---

## Project Structure

REST/
├── public/
│   └── style.css        # Styling
├── views/
│   ├── index.ejs        # All posts feed
│   ├── new.ejs          # Create post form
│   ├── show.ejs         # Single post view
│   └── edit.ejs         # Edit post form
├── index.js             # Express server & routes
├── package.json
└── .gitignore

---

## Author

**Manish Agarwal**
B.Tech CSE — Uttaranchal University
GitHub: https://github.com/agarwalmanish3922-code