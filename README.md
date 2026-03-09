:::writing{variant=“standard” id=“60241”}

TaskMaster Pro API

Overview

TaskMaster Pro API is a RESTful backend service built using ExpressJS, Sequelize ORM, and PostgreSQL.

This API allows users to register and manage tasks in a productivity system.

⸻

Technologies Used

Node.js
ExpressJS
Sequelize ORM
PostgreSQL

⸻

Installation
1.	Clone the repository

git clone https://github.com/pakman2ez/assignment-2.git
2.	Go to the project folder

cd assignment-2
3.	Install dependencies

npm install
4.	Create .env file

DB_NAME=taskmaster
DB_USER=postgres
DB_PASSWORD=password
DB_HOST=localhost
PORT=3000
5.	Run server

node server.js

⸻

API Endpoints

Users

Create User
POST /users

Get All Users
GET /users

Get User by ID
GET /users/:id

Delete User
DELETE /users/:id

⸻

Tasks

Create Task
POST /tasks

Get All Tasks
GET /tasks

Get Task by ID
GET /tasks/:id

Update Task
PUT /tasks/:id

Delete Task
DELETE /tasks/:id

⸻

Database Relationship

User hasMany Tasks
Task belongsTo User

⸻

Author

Software Engineering Assignment 2
:::
