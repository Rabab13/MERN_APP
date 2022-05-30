import React , { useEffect, useState } from 'react';
import { getBooksApi, addBooksApi, updateBooksApi, deleteBooksApi } from './apis/books'
import './App.css';
import TableBook from './components/TableBook';
import CreateBook from './components/CreateBook';


function App() {
  //Create state to store all books
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooksApi().then(books => setBooks(books))
  },[])

  const addBook = (book) =>{
    return addBooksApi(book)
    .then(data => {
      setBooks([...books, data])
    })
  }
  const updateBook = (book)=>{
    return updateBooksApi(book)
    .then(data => {
      return data;
    })
  }
  const deleteBook = (id)=>{
    return deleteBooksApi(id)
    .then(data => {
      if (data.deletedCount === 1)
      setBooks(books.filter(book => book._id !== id))
    })
  }


  return (
    <div className="App">
      <div className="container-fluid">
      <CreateBook onCreate={addBook}/>
      <TableBook books={books} onDelete={deleteBook} onUpdate={updateBook}/>
      </div>
    </div>
  );
}

export default App;
