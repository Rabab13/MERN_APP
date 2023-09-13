import React, { useState } from 'react';

function TableBook(props) {
  const { books, onDelete, onUpdate } = props;

  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => {
          return (
            <tr key={book._id}>
              <td className="title">{book.title}</td>
              <td>
                <Description book={book} onUpdate={onUpdate} />
              </td>
              <td>
                <button className="delete" onClick={() => onDelete(book._id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function Description(props) {
  const { book, onUpdate } = props;
  const [description, setDescription] = useState(book.description);

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="description" key={book.description}>
      <input type="text" value={description} onChange={(e) => handleChange(e)} />
      <button onClick={() => onUpdate({ _id: book._id, description: description })}>
        Update Book Description
      </button>
    </div>
  );
}

export default TableBook;
