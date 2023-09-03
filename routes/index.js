//imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

//database
const db = mysql.createConnection({
    host: 'sql8.freemysqlhosting.net',
    user: 'sql8644076',
    port:"3306",
    password: '7xIUTgHi35',
    database: 'sql8644076',
  });

//Express Router
const router = express.Router();

//Middleware
router.use(bodyParser.json());
router.use(cors()); 

//Routes Management
//Homepage
//Homepage
router.get("/", function (req, res) {
    res.sendFile("views/index.html", { root: __dirname + "/../" });
});

//Login
router.get('/api/login', (req, res) => {
    res.sendFile("views/Login.html", { root: __dirname + "/../" });    
});

//Signup
router.get('/api/signup', (req, res) => {
    res.sendFile("views/SignUp.html", { root: __dirname + "/../" });    
});
//Signup
router.post('/api/signup', (req, res) => {
  //collect forn details
  const {
    firstName,
    lastName,
    residentialAddress,
    idNumberOrPassport,
    emailAddress,
    password,
  } = req.body;

  // Check if all required fields are provided
  if (
    !firstName ||
    !lastName ||
    !residentialAddress ||
    !idNumberOrPassport ||
    !emailAddress ||
    !password
  ) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Create an SQL query to insert the data into the Patient table
  const sql = `INSERT INTO Patient (FirstName, LastName, ResidentialAddress, IDNumberOrPassport, EmailAddress, PasswordS) VALUES (?, ?, ?, ?, ?, ?)`;

  // Execute the SQL query with the provided form data
  db.query(
    sql,
    [firstName, lastName, residentialAddress, idNumberOrPassport, emailAddress, password],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error inserting data into the database' });
      }

      console.log('Data inserted into the database');
      res.sendFile("views/dashboard.html", { root: __dirname + "/../" });
    }
  );

});

//dashboard
router.get('/api/dashboard', (req, res) => {
    res.sendFile("views/dashboard.html", { root: __dirname + "/../" });    
});

//location
router.get('/api/location', (req, res) => {
  res.sendFile("views/Location.html", { root: __dirname + "/../" });    
});

//booking_reason
router.get('/api/que_reason', (req, res) => {
  res.sendFile("views/book_appointment.html", { root: __dirname + "/../" });    
});

//generate_ticket
router.get('/api/generate_ticket', (req, res) => {
  res.sendFile("views/generate_ticket.html", { root: __dirname + "/../" });    
});


//request_medication
router.get('/api/request_medication', (req, res) => {
  res.sendFile("views/request_medication.html", { root: __dirname + "/../" });    
});
router.get('/api/get_medication', (req, res) => {
  res.sendFile("views/get_medication.html", { root: __dirname + "/../" });    
});




router.post('/api/login', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);

  // Handle the data on the server as needed
  console.log('Email:', receivedData.email);
  console.log('Password:', receivedData.password);

  // Send a response back to the client
  res.status(200).json({ message: 'Data received on the server', data: receivedData });
});

router.post('/api/register', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);

  // Handle the data on the server as needed
  console.log('Full Name:', receivedData.fullname);
  console.log('Sutdent Email:', receivedData.email);
  console.log('Password:', receivedData.password);

  // Send a response back to the client
  res.status(200).json({ message: 'Data received on the server', data: receivedData });
});

module.exports = router;
