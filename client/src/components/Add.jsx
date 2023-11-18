import React from 'react';
import axios from 'axios';
import {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Add = () => {
    const[book,SetBook]=useState({
        title:"",
        author:"",
        note:"",
        cover:"",
    });

    const navigate=useNavigate();

    const handleChange= (e)=>{
        SetBook((prev)=>({...prev,[e.target.name]:e.target.value}));

    };

    const handleClick = async e => {
        //prévenir raffraichissement par défaut
        e.preventDefault();

        try{
            await axios.post("http://localhost:3001/books",book);
            navigate('/');
        }
        catch(err){
            console.error("Error adding book:", err);
        }
        
    }
    console.log(book);
    return (
        <div className="form">
            <h1>Add New Book</h1>
            <input type="text"  placeholder='Title' onChange={handleChange} name='title'/>
            <input type="text" placeholder='Author'onChange={handleChange}  name='author'/>
            <input type="text" placeholder='Description'onChange={handleChange}  name='note'/>
            <input type="text"placeholder='Cover' onChange={handleChange} name='cover' />
            <button onClick={handleClick}>Add </button>
            <Link to="/">Back to the books</Link>
        </div>
    );
};

export default Add;