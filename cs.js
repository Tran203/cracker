const mysql = require('mysql');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port:"3306",
    database: 'user',
  });

//connect
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE Patient (PatientID INT PRIMARY KEY AUTO_INCREMENT,FirstName VARCHAR(255) NOT NULL,LastName VARCHAR(255) NOT NULL,ResidentialAddress VARCHAR(255) NOT NULL,IDNumberOrPassport VARCHAR(13) NOT NULL,EmailAddress VARCHAR(255) NOT NULL,PasswordS VARCHAR(255) NOT NULL)";
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });