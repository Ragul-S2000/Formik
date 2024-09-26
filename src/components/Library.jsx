import React, { useContext, useState } from "react";
import Information from "../components/Info";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const navigate = useNavigate();
  window.onload = () => {
    navigate("/");
  };

  const { books , setbooks,picked,setpicked,toEdit,settoEdit,
    name,setname,date,setdate,isbn,setisbn,author,setauthor
  } = useContext(Information);
  const [hoveredBookId, setHoveredBookId] = useState(null);

  function handleOver(id) {
    setHoveredBookId(id);
  }

  function handleOut() {
    setHoveredBookId(null);
  }
  function handleDelete(id) {
    const Delete = books.filter((book) => book.id !== id);
    setbooks(Delete);
  }

  function handleEdit  (id) {
    const Edit = books.find((book) => book.id === id);
    if (Edit) {
      settoEdit(Edit)
      setpicked(true)
      setname(Edit.title);
      setauthor(Edit.author);
      setisbn(Edit.isbn);
      setdate(Edit.publishedDate);
    }
    
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "teal",
          
          marginLeft: "10vw",
        }}
        className="row mt-3 pt-5 col-10  justify-content-center"
      >
        {books.map((book) => (
          <div
            key={book.id}
            onMouseOver={() => handleOver(book.id)}
            onMouseOut={handleOut}
            className="card col-12 col-xl-3 mx-3 my-3"
          >
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <h6 className="card-subtitle">Author: {book.author}</h6>
              <p className="card-text mb-0">ISBN: {book.isbn}</p>
              <p className="card-text">Published On: {book.publishedDate}</p>
            </div>
            {hoveredBookId === book.id && (
              <div>
                <button type="button" onClick={()=>handleDelete(book.id)}>Delete</button>
                <span>
                  <button type="button" onClick={()=>handleEdit(book.id)}>Edit</button>
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Library;
