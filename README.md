# To-Do Web App
Project Overview

To-Do Web App is a modern task management application that allows users to organize their tasks using boards and to-dos. Users can securely log in using email authentication and efficiently manage tasks with a clean and intuitive interface.

Project Objective

The objective of this project is to build a full-stack To-Do application where users can:

Log in using email authentication

Create and manage boards

Create, update, and delete to-dos within boards

Perform full CRUD operations

Maintain an organized task workflow

# Tech Stack
Layer	Technology
Frontend	React.js
Backend	FastAPI (Python)
Database	SQL (SQLite / PostgreSQL / MySQL)
Authentication	Firebase Email Verification
Key Features
User Authentication

Secure email-based login using Firebase

User-specific access to boards and to-dos


Board Management

Create new boards

Update board details

Delete boards

Organize tasks board-wise

To-Do Management

Add new to-dos inside boards

Edit existing to-dos

Delete to-dos

Mark tasks as completed

Core Functionality

Full CRUD operations

RESTful API architecture

Responsive and user-friendly UI

Project Structure
frontend/

├── src/
│   ├── components/        # Reusable UI components

│   ├── pages/             # Login, Dashboard, Board pages

│   ├── services/          # API & Firebase services

│   └── App.js

└── package.json

## 
backend/
├── app/

│   ├── main.py            # Application entry point

│   ├── models.py          # Database 

│   ├── schemas.py         # Pydantic schemas

│   ├── routes.py          # API routes

│   └── database.py        # Database configuration

└── requirements.txt

README.md

Setup Instructions
Prerequisites

Node.js & npm

Python 3.10+

SQL database (SQLite recommended for development)

Firebase project with Email Authentication enabled

# Backend Setup
cd backend
python -m venv venv


Activate virtual environment:

# Windows
venv\Scripts\activate



# Install dependencies:

pip install -r requirements.txt


Start FastAPI server:

uvicorn app.main:app --reload

Frontend Setup
cd frontend
npm install


Configure Firebase credentials in:

services/firebase.js


Start frontend server:

npm start


Open browser:

http://localhost:3000

Application Usage

Register or log in using email

Create boards for task organization

Add to-dos within boards

Edit or delete boards and tasks

Mark tasks as completed


