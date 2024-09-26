import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Information from "./components/Info";
import LibraryMain from "./components/LibraryMain";
// import './components/LibraryMain.css'
const App = () => {
  let [toEdit,settoEdit]= useState({})
  let [picked,setpicked]= useState(false)
  let [name, setname] = useState("")
  let [author, setauthor] = useState("")
  let [isbn, setisbn] = useState("")
  let [date,setdate]=useState("")
  let [Register, setRegister] = useState([]);
  const [books,setbooks] =useState([
    {
      id:1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "978-0-7432-7356-5",
      publishedDate: "April 10",
    },
    {
      id:2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "978-0-06-112008-4",
      publishedDate: "July 11, 1960",
    },
    {
      id:3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      isbn: "978-0-14-143951-8",
      publishedDate: "January 28, 1813",
    },
    {
      id:4,
      title: "1984",
      author: "George Orwell",
      isbn: "978-0-452-28423-4",
      publishedDate: "June 8, 1949",
    },
    {
      id:5,
      title: "Brave New World",
      author: "Aldous Huxley",
      isbn: "978-0-06-085052-4",
      publishedDate: "1932",
    },
    {
      id:6,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      isbn: "978-0-316-76948-7",
      publishedDate: "July 16, 1951",
    },
    {
      id:7,
      title: "Moby-Dick",
      author: "Herman Melville",
      isbn: "978-0-14-243724-7",
      publishedDate: "October 18, 1851",
    },
    {
      id:8,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      isbn: "978-0-618-00221-1",
      publishedDate: "September 21, 1937",
    },
    {
      id:9,
      title: "Frankenstein",
      author: "Mary Shelley",
      isbn: "978-0-486-28273-1",
      publishedDate: "January 1, 1818",
    },
    {
      id:10,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      isbn: "978-0-618-05799-2",
      publishedDate: "July 29, 1954",
    },
    {
      id:11,
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      isbn: "978-0-14-144114-6",
      publishedDate: "October 16, 1847",
    },
    {
      id:12,
      title: "The Odyssey",
      author: "Homer (translated by Robert Fagles)",
      isbn: "978-0-14-026886-7",
      publishedDate: "8th century BCE",
    },
    {
      id:13,
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      isbn: "978-0-486-29571-7",
      publishedDate: "June 20, 1890",
    },
    {
      id:14,
      title: "Wuthering Heights",
      author: "Emily Brontë",
      isbn: "978-0-14-143955-6",
      publishedDate: "December 1847",
    },
    {
      id:15,
      title: "The Scarlet Letter",
      author: "Nathaniel Hawthorne",
      isbn: "978-0-14-243726-1",
      publishedDate: "March 16, 1850",
    },
    {
      id:16,
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      isbn: "978-0-553-21257-4",
      publishedDate: "November 1880",
    },
    {
      id:17,
      title: "The Sun Also Rises",
      author: "Ernest Hemingway",
      isbn: "978-0-684-80146-9",
      publishedDate: "October 22, 1926",
    },
    {
      id:18,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      isbn: "978-0-553-21257-4",
      publishedDate: "1866",
    },
  ]);
  return (
    
    <>
      <Information.Provider value={{toEdit,settoEdit, Register, setRegister,books,setbooks,name,setname,date,setdate,isbn,setisbn,author,setauthor,picked,setpicked}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
                <Route path="/library" element={<LibraryMain/>} />      
          </Routes>
        </BrowserRouter>
      </Information.Provider>
    </>
  );
};

export default App;
