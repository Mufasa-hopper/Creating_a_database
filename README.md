This repository was created to showcase my proficiency in building a relational 
database and implementing a RESTful API. It demonstrates my ability to design and manage 
database schemas, establish connections, and utilize the REST protocol for seamless interaction with the API endpoints.

Entity Relational Diagram (ERD):

- ERD is created before the diagram.
- It illustrates the relationships between entities and their attributes.

NPM:

- Use **`npm init`** to create a **`package.json`** file and gain access to the Node Package Manager (NPM).
- NPM allows us to download and manage packages for our application.

Express and Middleware:

- Install Express using **`npm install express`**.
- Use **`const express = require('express')`** to bring in Express.
- **`const app = express()`** gives us access to the Express library.
- Middleware: Use **`app.use`** to enable optional body data and set up middleware for the application.

PG Library and Connection Pools:

- Install the PG library using **`npm install pg`**.
- PG library allows us to create connection pools.
- Destructure the pool module using **`const { Pool } = require('pg')`**.
- The default port for the pool is 5432.

Step-by-Step Guide to Creating a Server that Pulls from a Database:

1. Create the database.
2. Create tables and seed data into them.
3. Set up the API server.
    - Run **`npm init -y`** to create a **`package.json`** file and gain access to NPM.
    - Create the **`.gitignore`** file.
    - Create the **`server.js`** file.
4. Configure Express.
    - Use **`const express = require('express')`** to bring in Express.
    - Use **`const app = express()`** to set up the Express application.
    - Use **`app.use`** to enable middleware and gain access to optional body data.
    - Set the server to run on port 3000.
5. Work on the routes.
    - Create routes for **`get all`**, **`get one`**, **`create`**, **`edit`**, and **`delete`**.
    - Use **`put`** for updating data.
    - Ensure the routes have CRUD (Create, Read, Update, Delete) functionality.