const express = require('express');
const router = express.Router();
const Book = require('../models/Books')

//Get books
router.get('/', (req, res)=>{
    //find the book in the db
    Book.find()
    //Then send the found books to the client side
    .then(data=>{
        res.json(data)
    })
    //Catch errors
    .catch(e => {
        res.json({massage : e})
    })
})

//Post New books
router.post('/', (req, res)=>{
    const book = new Book({
        title : req.body.title,
        description : req.body.description
    })
    //Save the new book in database
    book.save()
    .then(data =>{
        res.json(data);
    })
    //Catch errors
    .catch(e => {
        res.json({massage : e})
    })
})

//Delete books by id
router.delete('/:id', (req, res)=>{
    //Use id as a query parameter to delete book by id No.
    Book.deleteOne({_id : req.params.id})
    .then(data =>{
        res.json(data);
    })
    //Catch errors
    .catch(e => {
        res.json({massage : e})
    })
})

//update books by id
router.patch('/:id', (req, res)=>{
    //Use id as a query parameter to update book by id No.
    Book.updateOne({_id : req.params.id},
        {
            $set:{description: req.body.description}
        })
    //Send the data of the new books
    .then(data =>{
        res.json(data);
    })
    //Catch errors
    .catch(e => {
        res.json({massage : e})
    })
})

module.exports = router