// const express = require("express");
// const app = express();
// const mysql = require("mysql");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "new_schema",
// });


// app.get("/", (req, res) => {
//   return res.json("From Backend Side");
// });
// app.get("/users", (req, res) => {
//   const sql = "SELECT * FROM database.test1";
//   db.query(sql, (err, data) => {
//     if (err) return res.json(err);
    
//     return res.json(data);
//   });
// });





// app.get("/utenti", (req, res) => {
//   const sql = "SELECT * FROM [PrismedDB].[dbo].[UsersDetails]"; 
//   db.query(sql, (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: "An error occurred while fetching data." });
//     }
//     return res.json(data);
//   });
// });

// app.post("/utenti", (req, res) => {
//   const { 
//     nome,
//     cognome,
//     azienda,
//     citt,
//     email,
//     posizione,
//     interessi,
//     dipartimento,
//     tiporichiesta,
//     message
//   } = req.body;
//   UsersDetails
//   const sqlInsert = "INSERT INTO utenti (nome, cognome, azienda, citt, email, posizione, interessi, dipartimento, tipoRichiesta, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
//   db.query(sqlInsert, [
//     nome,
//     cognome,
//     azienda,
//     citt,
//     email,
//     posizione,
//     interessi,
//     dipartimento,
//     tiporichiesta,
//     message
//   ], (err, result) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: "An error occurred while inserting data." });
//     }
//     return res.status(200).json({ message: "Data inserted successfully." });
//   });
// });

// app.listen(5000, () => console.log("Server started at 5000"));
