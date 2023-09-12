const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "database",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
    return;
  }
  console.log("Connected to the database as id " + db.threadId);
});

app.get("/", (req, res) => {
  return res.json("From Backend Side");
});

app.get("/chiese", (req, res) => {
  const sql = "SELECT * FROM database.chiese;";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.use(express.json());

app.post("/chiese", (req, res) => {
  const { name, city, street, style, description } = req.body;

  const sqlInsert =
    "INSERT INTO database.chiese (name, city, street, style, description) VALUES (?, ?, ?, ?, ?)";
  db.query(
    sqlInsert,
    [name, city, street, style, description],
    (err, data) => {
      if (err) {
        console.error(err); // Log the actual error
        return res.status(500).json({ error: "An error occurred while inserting data." });
      }
      return res.status(200).json({ message: "Data inserted successfully." });
    }
  );
});

app.listen(5000, () => console.log("Server started at 5000"));