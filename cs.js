const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'sql8.freemysqlhosting.net',
  user: 'sql8646383',
  port:  "3306",
  password: 'G6p8cawiNf',
  database: 'sql8646383',
});

//connect
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE Patient (PatientID INT PRIMARY KEY AUTO_INCREMENT,FirstName VARCHAR(255) NOT NULL,LastName VARCHAR(255) NOT NULL,ResidentialAddress VARCHAR(255) NOT NULL,IDNumberOrPassport VARCHAR(13) NOT NULL,EmailAddress VARCHAR(255) NOT NULL,PasswordS VARCHAR(255) NOT NULL),C VARCHAR(1) NOT NULL";
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });