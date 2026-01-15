-- Create the table
CREATE TABLE IF NOT EXISTS Employees (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    role VARCHAR(100) NOT NULL
);

-- Seed the data
INSERT INTO Employees (firstName, lastName, role) VALUES 
('Baseer', 'Afridi', 'Full Stack Developer'),
('John', 'Doe', 'Senior Engineer'),
('Jane', 'Smith', 'UI/UX Designer'),
('Ahmed', 'Khan', 'Project Manager'),
('Sarah', 'Wilson', 'Backend Lead');