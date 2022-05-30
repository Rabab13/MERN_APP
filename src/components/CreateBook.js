import React, { useState } from 'react';


function CreateBook (props) {

    const {onCreate} = props;
    const [book, setBook] = useState({
        title: '',
        description: ''
    })
    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onCreate(book);
    }
    return (
        <>
        <h1>Add New Book</h1>
        <form onSubmit={onSubmit}>
            
            <div>Book Name</div>
                <input type="text" name="title" value={book.title} onChange={(e)=> handleChange (e)}/>
            
            <div>Book Description</div>
                <input type="text" name="description" value={book.description} onChange={(e)=> handleChange (e)}/>
            
            <input type="submit" value="Submit"/>
        </form>
        </>
    )
    }
export default CreateBook;