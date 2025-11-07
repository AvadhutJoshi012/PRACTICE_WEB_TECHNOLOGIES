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
    console.log("Not Connected");
  } else {
    console.log("Connected To Books Successfully.");
  }
});

app.get("/books", (req, res) => {
  const sql = "SELECT * FROM BOOKS";

  db.query(sql, (err, data) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(data);
  });
});

app.post("/books", (req, res) => {
  const { title, author, publication_year, genre } = req.body;
  const sql ="INSERT INTO BOOKS(title, author, publication_year, genre) VALUES(?,?,?,?)";

  db.query(sql, [title, author, publication_year, genre],(err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: "Inserted Successfully." });
  });
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM BOOKS WHERE id=?";

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: "Deleted Successfully." });
  });
});

app.put("/books/:id", (re, res) => {
  const { id } = req.params;
  const { title, author, publication_year, genre } = req.body;
  const sql =
    "UPDATE BOOKS SET title=?, author=?, publication_year=?, genre=? WHERE id=?";

  db.query(sql, [title, author, publication_year, genre, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: "Updated Successfully." });
  });
});

app.listen(5000, () => {
  console.log("Port Running on http://localhost:5000");
});
