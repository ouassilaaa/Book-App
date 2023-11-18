import express from 'express';
import mysql2 from "mysql2";
import cors from "cors";

//Json file access
const app = express();
app.use(express.json());

//axios access
app.use(cors());

//Database connection
const db= mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'Ouassila9',
    database:'bookapp'
});

//api request
app.get("/", (req, res) => {
  res.json("hello this is the back");
});

//SELECT: fetch data
app.get("/books", (req, res) => {
  const sql = "SELECT book_title, book_author, book_note, book_cover FROM book";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

//CREATE: new data
app.post("/books", (req, res) => {
    const sql = "INSERT INTO book (`book_title`, `book_author`, `book_note`, `book_cover`) VALUES (?)";
  
    const values = [
      req.body.title,
      req.body.author,
      req.body.note,
      req.body.cover,
    ];
  
    db.query(sql, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  
//DELETE
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const sql = "DELETE FROM book WHERE id_book = ? ";

  db.query(sql, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// UPDATE 
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const sql = "UPDATE book SET `book_title`= ?, `book_author`= ?, `book_note`= ?, `book_cover`= ? WHERE id_book = ?";

  const values = [
    req.body.title,
    req.body.author,
    req.body.note,
    req.body.cover,
  ];

  db.query(sql, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

//écoute de l'API
app.listen(3001,()=>{
    console.log("Server running on port : 3001 ")
});