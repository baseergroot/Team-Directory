Team Directory Application
This project is a simple full-stack "Team Directory" application built to demonstrate communication between a ColdFusion REST API and a React frontend.
Tech Stack

Backend: Adobe ColdFusion
Frontend: React (Vite)
Database: Relational Database (SQL)
API Format: REST / JSON


Database Setup
The database schema is defined in the setup.sql file.
Steps:

Create a database (or use an existing one)
Run the SQL script:
The script creates an Employees table and inserts sample records.

The ColdFusion backend connects to this database via a configured datasource.

Backend (ColdFusion)


Application.cfc
Handles application-level configuration and CORS headers to allow communication with the React frontend.


Employee.cfc
Exposes a REST endpoint that retrieves employee records from the database and returns them in JSON format.


Security best practices are followed using queryExecute for database access.

Frontend (React)

Built using Vite + React
Uses useEffect and useState to fetch data from the backend API
Displays employees in a clean UI
Includes a search feature to filter employees by name


Running the Project

Run the SQL script to set up the database
Start the ColdFusion server
Start the React frontend
Access the application in the browser


Notes
This project focuses on clean API communication, JSON handling, and separation of concerns between the frontend and backend.
