// import express from 'express';
// import mysql from 'mysql'

//création et initialisation de la variable express qui permettra de faire les requêtes API et intialiser le server
const express = require('express');
const app = express();

//démarrage de l'API
app.listen(3001,()=>{
    console.log("Server running on port : 3001 ")
});

//connexion à la bdd
const mysql= require('mysql2')
const db= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Ouassila9',
    database:'bookapp'
});

//api request
app.get("/",(req,res)=>{
    res.json("hello this is the back ! ")
}); 

app.get("/books", (req,res)=>{
    const request = "SELECT id_book, book_title, book_author, book_update, book_cover FROM book"
    db.query(request,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


