export function getBooksApi(){
    return fetch ('http://localhost:4000/books')
    //return the response
    .then (res => res.json())
    .then(data => data);
}
export function addBooksApi(book){
    return fetch ('http://localhost:4000/books',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    .then (res => res.json())
    .then(data => data);
}

export function updateBooksApi(book){
    return fetch (`http://localhost:4000/books/${book._id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    .then (res => res.json())
    .then(data => data);
}
export function deleteBooksApi(id){
    return fetch (`http://localhost:4000/books/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then (res => res.json())
    .then(data => data);
}