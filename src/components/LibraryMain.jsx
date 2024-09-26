import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Library from "./Library";
import Information from "../components/Info";

const LibraryMain = () => {
  let { books, setbooks ,picked,setpicked,toEdit,setoEdit
    , name, setname,
      date,setdate,
    isbn, setisbn,
      author,setauthor
    }= useContext(Information)
  const Navigate = useNavigate();
  window.onload = () => {
    Navigate("/library");
  };
const handleADD = () => {
    setbooks([...books, { id: books.length + 1, name: name, author: author, isbn: isbn, date: date }]);
    setname("");
    setauthor("");
    setisbn("");
    setdate("");
  };

  const handleUpdate = () => {
    let newBooks = books.map((book) => {
      if (book.id === toEdit.id) {
        return { ...book, name: name, author: author, isbn: isbn, date: date };
      }
      return book;
    });
    setbooks(newBooks);
    setpicked(false);
    setname("");
    setauthor("");
    setisbn("");
    setdate("");
  };
  return (
    <>
          <div style={{backgroundColor:"tan"}} className="container-fluid">
        <div className="row justify-content-center">
                  <div
        className=" library row mt-5 col-10 bg-warning col-xl-5 justify-content-center">
            <center>
              <h1>LIBRARY</h1>
            </center>

            <div className="row col-8  col-xl-4 mx-2 ">
              <label htmlFor="name">Book's Name:</label>
              <input id="name" name="name" value={name} onChange={(e)=> setname(e.target.value) } type="text" />
            </div>
            <div className="row col-8 col-xl-4 mx-2">
              <label htmlFor="author">Author's Name:</label>
              <input id="author" name="author" value={author } onChange={(e)=> setauthor(e.target.value) } type="text" />
            </div>
            <div className="row col-8 col-xl-4 mx-2">
              <label htmlFor="isbn">ISBN Number:</label>
              <input id="isbn" name="isbn" value={isbn} onChange={(e)=> setisbn(e.target.value) } type="text" />
            </div>
            <div className="row col-8 col-xl-4 mx-2 ">
              <label htmlFor="date">PUblished At:</label>
              <input id="date" name="date" value={date} onChange={(e)=> setdate(e.target.value) } type="text" />
            </div>
            <center className="my-3">
              {picked === false ? <button type="button"  className="px-5" onClick={()=>handleADD()}
              >Add</button>:<button type="button" onClick={()=>handleUpdate(toEdit.id)}>Update</button>}
            </center>
          </div>
        </div>
          </div>
          <div style={{backgroundColor:"tan"}} className="container-fluid">
              <div className="row">
                  <Library />
              </div>
          </div>
    </>
  );
};

export default LibraryMain;
