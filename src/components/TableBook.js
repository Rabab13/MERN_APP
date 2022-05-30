import React, { useState } from 'react';


function TableBook (props) {

    const {books, onDelete, onUpdate} = props;

            return (
                <table className="table table-borderless">
                    <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Delete</th>
                </tr>
                    {books.map(book =>{
                        return (
                            <>
                        
                            <tr key={book._id}>
                                <td className="title">{book.title}</td>
                                <Description book={book} onUpdate={onUpdate}/>
                                <td>
                                <button className="delete" onClick={() => onDelete(book._id)}>Delete</button>
                                </td>
                            </tr>
                            
                            
                            </>
                        )
                    })
                    
                }
                </table>

            )
        }
    //Create new func to update book description
    function Description (props){

        const {book, onUpdate} = props
        const [description, setDescription] = useState(book.description);

        const handleChange = (e) => {
            setDescription(e.target.value)
        }


        return (
            <tr className="description" key={book.description}>
                <td>
                    <input type="text" value={description} onChange ={(e)=> handleChange(e)}/>

                </td>
                <td>
                    <button  onClick={() => onUpdate({_id: book._id, description: description})}>Update Book Description</button>
                </td>
                </tr>
                
            
        )
    }


export default TableBook;