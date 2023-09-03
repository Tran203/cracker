CREATE TABLE Patient (
    PatientID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    ResidentialAddress VARCHAR(255) NOT NULL,
    IDNumberOrPassport VARCHAR(13) NOT NULL,
    EmailAddress VARCHAR(255) NOT NULL,
    PasswordS VARCHAR(255) NOT NULL
);

CREATE TABLE Ticket (
    TicketID INT PRIMARY KEY AUTO_INCREMENT,
    TicketCode VARCHAR(20) NOT NULL,
    NatureOfVisit VARCHAR(255) NOT NULL,
    Issue VARCHAR(255) NOT NULL,
    BookingDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PatientID INT, -- Add a PatientID column
    Phone VARCHAR(20),
    FOREIGN KEY (PatientID) REFERENCES Patient(PatientID) -- Define the foreign key constraint
);

CREATE TABLE MedicationRequest (
    RequestID INT PRIMARY KEY AUTO_INCREMENT,
    PatientID INT NOT NULL, -- Add a PatientID column
    Condition VARCHAR(255) NOT NULL,
    MedicineName VARCHAR(255) NOT NULL,
    Instructions TEXT,
    RequestDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (PatientID) REFERENCES Patient(PatientID) -- Define the foreign key constraint
);
