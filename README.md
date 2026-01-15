# Team Directory Application

This project is a simple full-stack "Team Directory" application built to demonstrate communication between a ColdFusion REST API and a React frontend.

## Tech Stack
- Backend: Adobe ColdFusion
- Frontend: React (Vite)
- Database: Relational Database (SQL)
- API Format: REST / JSON

---

## Database Setup
The application uses a local PostgreSQL database.

The schema and seed data are provided in `setup.sql`.  
This script was executed once using the PostgreSQL terminal, and the database was then connected to ColdFusion via a configured datasource in the ColdFusion Administrator.

### Steps:
1. Create a database (or use an existing one)
2. Run the SQL script:
3. The script creates an `Employees` table and inserts sample records.

The ColdFusion backend connects to this database via a configured datasource.

---

## Backend (ColdFusion)

- `Application.cfc`  
Handles application-level configuration and CORS headers to allow communication with the React frontend.

- `Employee.cfc`  
Exposes a REST endpoint that retrieves employee records from the database and returns them in JSON format.

Security best practices are followed using `queryExecute` for database access.

---

## Frontend (React)

- Built using Vite + React
- Uses `useEffect` and `useState` to fetch data from the backend API
- Displays employees in a clean UI
- Includes a search feature to filter employees by name

---

## Running the Project

1. Run the SQL script to set up the database
2. Start the ColdFusion server
3. Start the React frontend
4. Access the application in the browser

---

## Notes

This project focuses on clean API communication, JSON handling, and separation of concerns between the frontend and backend.
