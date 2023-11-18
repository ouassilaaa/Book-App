import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Image from '../images/bookcover.jpg';

const Books = () => {

    const[books,setBooks]=useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(()=>{
        const fetchAllBooks= async()=>{
            try{
                const res= await axios.get("http://localhost:3001/books");
                // console.log(response);
                setBooks(res.data);

            } catch(err){
                 console.log(err);
            }
        };

        fetchAllBooks();
    },[]);

    const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  //search filter
  const filteredBooks = books.filter((book) =>
    book.book_title.toLowerCase().includes(searchTerm.toLowerCase())
  );



    return (
        <div>
            <h1>Welcome to your library</h1>
            <div className='search-bar-container'> 
                <input className='search-bar' 
                type="text" placeholder="Search by title" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
            <div className="books">
                {filteredBooks.map((book)=>(
                    <div className="book" key={book.id_book}>
                        {<img src={Image} alt="" />}
                        <h2>{book.book_title}</h2>
                        <h3>{book.book_author}</h3>
                        <p>{book.book_note}</p>
                        <button className="update"><Link to={`/update/${book.id}`}> Update </Link></button>
                        <button className='delete' onClick={() => handleDelete(book.id_book)}>Delete</button>
                    </div>
                ))};
            </div>
            <button><Link to="/add">Add a new book</Link></button>
            
        </div>
    );
};

export default Books;