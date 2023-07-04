const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "bandera123.",
  database: "crud_evidencija",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM evidencija_db";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.post("/api/post", (req, res) => {
  const { name, email, contact } = req.body;
  const sqlInsert =
    "INSERT INTO evidencija_db (name, email, contact) VALUES (?, ?, ?,)";
  db.query(sqlInsert, [name, email, contact], (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.get("/", (req, res) => {
  // const sqlInsert =
  //  "INSERT INTO evidencija_db (name, email, contact) VALUES('johndoe', 'johndoe@email.com', 83344555)";
  //db.query(sqlInsert, (error, result) => {
  // console.log("error", error);
  //  console.log("result", result);
  //  res.send("Hello express");
  // });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
