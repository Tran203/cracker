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
    res.sendFile("views/login.html", { root: __dirname + "/../" });    
});

//Signup
router.get('/api/signup', (req, res) => {
    res.sendFile("views/SignUp.html", { root: __dirname + "/../" });    
});

//dashboard
router.get('/api/dashboard', (req, res) => {
    res.sendFile("views/dashboard.html", { root: __dirname + "/../" });    
});

//ticket
router.get('/api/ticket', (req, res) => {
  res.sendFile("views/ticket.html", { root: __dirname + "/../" });    
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
