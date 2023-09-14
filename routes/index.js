//imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const ejs = require("ejs");
const path = require("path");

//database
/*const db = mysql.createConnection({
  host: 'sql8.freemysqlhosting.net',
  user: 'sql8646383',
  port:"3306",
  password: 'G6p8cawiNf',
  database: 'sql8646383',
}); 

//const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  port: "3306",
  database: 'test',
}); */


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

//get the file
router.get("/api/file", function (req, res) {
  //var idNumberOrPassport = req.query.idNumberOrPassport;
  var idNumberOrPassport = 123;
  // Query the database to fetch achievements for the given alumni_id
  /* var sql = "SELECT * FROM Patient WHERE IDNumberOrPassport = ?";
  var values = [idNumberOrPassport];

  db.query(sql, values, function (err, result) {
    if (err) {
      console.error(err);
      res.send("An error occurred while fetching achievements.");
    } else {
      fileinfo = result[0];
      console.log(fileinfo);
     
    }
  }); */

  res.render("../views/request.ejs", { fileInfo: 'Y'});
});

router.get("/api/file2", function (req, res) {
  //var idNumberOrPassport = req.query.idNumberOrPassport;
  var idNumberOrPassport = 123;
  // Query the database to fetch achievements for the given alumni_id
  /* var sql = "SELECT * FROM Patient WHERE IDNumberOrPassport = ?";
  var values = [idNumberOrPassport];

  db.query(sql, values, function (err, result) {
    if (err) {
      console.error(err);
      res.send("An error occurred while fetching achievements.");
    } else {
      fileinfo = result[0];
      console.log(fileinfo);
     
    }
  }); */

  res.render("../views/request.ejs", { fileInfo: 'N'});
});

//Login
router.get('/api/login', (req, res) => {
  res.sendFile("views/Login.html", { root: __dirname + "/../" });
});

router.post('/api/login', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);

  const { email, password } = req.body;

  //sql
  /*var sql = "SELECT * FROM Patient where EmailAddress =? and PasswordS = ?";

  //query
  db.query(sql, [email, password], function (err, result) {
    if (err) {
      throw err;
    } else {
      //check details
      if (result && result.length > 0) {
        var fullname = result[0].FirstName;
        var idNumberOrPassport = result[0].IDNumberOrPassport;
        console.log(fullname+ " "+ idNumberOrPassport + ' has Login successful!');
        //res.status(200).json({ message: 'Login successful!' });
      } else {
        //res.status(401).json({ message: 'Invalid email or password' });
        console.log('Invalid email or password');
      }
    }
  }); */

  var data = {
    idNumberOrPassport: 123
  };
  //res.sendFile("views/dashboard.html", { root: __dirname + "/../" });
  //res.render("views/dashboard_ejs", {idNumberOrPassport: req.query.idNumberOrPassport})

  ejs.renderFile(path.join(__dirname, "../views/dashboard.ejs"), data, function (err, html) {
    if (err) {
      console.error(err);
      res.send("An error occurred.");
    } else {
      res.send(html); // Send the rendered HTML
    }
  });

  // Handle the data on the server as needed
  console.log('Email:', receivedData.email);
  console.log('Password:', receivedData.password);

  // Send a response back to the client
  //s.status(200).json({ message: 'Data received on the server', data: receivedData });
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
  //const sql = `INSERT INTO Patient (FirstName, LastName, ResidentialAddress, IDNumberOrPassport, EmailAddress, PasswordS, C) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  // Execute the SQL query with the provided form data
  /*db.query(
    sql,
    [firstName, lastName, residentialAddress, idNumberOrPassport, emailAddress, password, "N"],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error inserting data into the database' });
      }

      console.log('Data inserted into the database');
    }
  );*/

  var data = {
    idNumberOrPassport: idNumberOrPassport
  };
  //res.sendFile("views/dashboard.html", { root: __dirname + "/../" });
  //res.render("views/dashboard_ejs", {idNumberOrPassport: req.query.idNumberOrPassport})

  ejs.renderFile(path.join(__dirname, "../views/dashboard_ejs.ejs"), data, function (err, html) {
    if (err) {
      console.error(err);
      res.send("An error occurred.");
    } else {
      res.send(html); // Send the rendered HTML
    }
  });

});

//dashboard
router.get('/api/dashboard', (req, res) => {
  res.sendFile("views/dashboard.html", { root: __dirname + "/../" });
});

router.get('/api/dashboard2', (req, res) => {
  var data = {
    idNumberOrPassport: 123
  };
  //res.sendFile("views/dashboard.html", { root: __dirname + "/../" });
  //res.render("views/dashboard_ejs", {idNumberOrPassport: req.query.idNumberOrPassport})

  ejs.renderFile(path.join(__dirname, "../views/dashboard.ejs"), data, function (err, html) {
    if (err) {
      console.error(err);
      res.send("An error occurred.");
    } else {
      res.send(html); // Send the rendered HTML
    }
  });
});

//location
router.get('/api/location', (req, res) => {
  res.sendFile("views/Location.html", { root: __dirname + "/../" });
});

//About
router.get("/api/about", function (req, res) {
  res.sendFile("views/about.html", { root: __dirname + "/../" });
});

//Contact
//About
router.get("/api/contact", function (req, res) {
  res.sendFile("views/contact.html", { root: __dirname + "/../" });
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
  //res.sendFile("views/request_medication.html", { root: __dirname + "/../" });
  var data = {

  }
  ejs.renderFile(path.join(__dirname, "../views/request.ejs"), data, function (err, html) {
    if (err) {
      console.error(err);
      res.send("An error occurred.");
    } else {
      res.send(html); // Send the rendered HTML
    }
  });
});
router.get('/api/get_medication', (req, res) => {
  res.sendFile("views/get_medication.html", { root: __dirname + "/../" });
});

router.get('/api/get_medication2', (req, res) => {
  res.sendFile("views/get_medication_copy.html", { root: __dirname + "/../" });
});


module.exports = router;
