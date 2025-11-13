import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MySQL#012AJ",
  database: "react_practice_db",
});

db.connect((err) => {
  if (err) {
    console.log("Not Connected.", err);
  } else {
    console.log("Connected Successfully.");
  }
});

app.get("/student", (req, res) => {
  const sql = "SELECT * FROM STUDENT";

  db.query(sql, (err, data) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(data);
  });
});

app.post("/student", (req, res) => {
  const { name, age } = req.body;
  const sql = "INSERT INTO STUDENT(name, age) VALUES(?,?)";

  db.query(sql, [name, age], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: "Inserted Successfully." });
  });
});

app.put("/student/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const sql = "UPDATE STUDENT SET name=?, age=? WHERE id=?";

  db.query(sql, [name, age, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: "Updated Successfully." });
  });
});

app.delete("/student/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM STUDENT WHERE id=?";

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: "Deleted Successfully." });
  });
});

app.listen(5000, () => {
  console.log("Running On http://localhost:5000");
});
