const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json({ limit: "10mb" }));

const db = mysql.createConnection({
  host: "127.0.0.1",
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
  const sql = "SELECT * FROM chiese;";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


app.get("/musei", (req, res) => {
  const sql = "SELECT * FROM musei;";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});



app.post("/chiese", (req, res) => {
  const { name, city, street, style, description, nameimg, img } = req.body;

  const imgBuffer = Buffer.from(img, 'base64');

  const sqlInsert =
    "INSERT INTO chiese (name, city, street, style, description, nameimg, img) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sqlInsert,
    [name, city, street, style, description, nameimg, imgBuffer],
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "An error occurred while inserting data." });
      }
      return res.status(200).json({ message: "Data inserted successfully." });
    }
  );
});


app.post("/musei", (req, res) => {
  const { name, city, street, style, description, nameimg, img } = req.body;

  const imgBuffer = Buffer.from(img, 'base64');

  const sqlInsert =
    "INSERT INTO musei (name, city, street, style, description, nameimg, img) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sqlInsert,
    [name, city, street, style, description, nameimg, imgBuffer],
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "An error occurred while inserting data." });
      }
      return res.status(200).json({ message: "Data inserted successfully." });
    }
  );
});






app.put("/chiese/:id", (req, res) => {
  const { name, city, street, style, description } = req.body;
  const id = req.params.id;

  const sqlUpdate =
    "UPDATE chiese SET name=?, city=?, street=?, style=?, description=? WHERE id=?";

  console.log("SQL Query:", sqlUpdate);
  console.log("Parameters:", [name, city, street, style, description, id]);

  db.query(
    sqlUpdate,
    [name, city, street, style, description, id],
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "An error occurred while updating data." });
      }

      console.log("Database response:", data);  // Log the database response
      return res.status(200).json({ message: "Data updated successfully." });
    }
  );
});


app.put("/musei/:id", (req, res) => {
  const { name, city, street, style, description } = req.body;
  const id = req.params.id;

  const sqlUpdate =
    "UPDATE musei SET name=?, city=?, street=?, style=?, description=? WHERE id=?";

  console.log("SQL Query:", sqlUpdate);
  console.log("Parameters:", [name, city, street, style, description, id]);

  db.query(
    sqlUpdate,
    [name, city, street, style, description, id],
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "An error occurred while updating data." });
      }

      console.log("Database response:", data);  // Log the database response
      return res.status(200).json({ message: "Data updated successfully." });
    }
  );
});








app.delete("/chiese/:id", (req, res) => {
  const id = req.params.id;
  const sqlDelete = "DELETE FROM chiese WHERE id = ?";

  db.query(sqlDelete, [id], (err, data) => {
    if (err) {
      console.error('Error deleting data:', err);
      return res.status(500).json({ error: "An error occurred while deleting data." });
    }
    console.log('Rows affected:', data.affectedRows);  // Log the affected rows
    return res.status(200).json({ message: "Data deleted successfully." });
  });
});


app.delete("/musei/:id", (req, res) => {
  const id = req.params.id;
  const sqlDelete = "DELETE FROM musei WHERE id = ?";

  db.query(sqlDelete, [id], (err, data) => {
    if (err) {
      console.error('Error deleting data:', err);
      return res.status(500).json({ error: "An error occurred while deleting data." });
    }
    console.log('Rows affected:', data.affectedRows);  // Log the affected rows
    return res.status(200).json({ message: "Data deleted successfully." });
  });
});






app.listen(5000, () => console.log("Server started at 5000"));