import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    note: "",
    cover: "",
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put("http://localhost:3001/books/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

    return (
        <div className="form">
            <h1>Update the Book</h1>
            <input type="text"  placeholder='Title' onChange={handleChange} name='title'/>
            <input type="text" placeholder='Author'onChange={handleChange}  name='author'/>
            <input type="text" placeholder='Description'onChange={handleChange}  name='note'/>
            <input type="text"placeholder='Cover' onChange={handleChange} name='cover' />
            <button onClick={handleClick}>Update</button> {error && "Something went wrong!"} <Link to="/">Back to the books</Link>
        </div>
    );
};

export default Update;