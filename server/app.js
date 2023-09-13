const express = require('express');
const app = express();
//access API from other domini
const cors = require('cors'); 
//BodyParser send data to our client
const bodyParser = require('body-parser');
const booksRoute = require('./router/books')
const mongoose = require('mongoose');

//Create middleware
//app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(bodyParser.json());
app.use('/books', booksRoute);

//Connect to database
mongoose.connect("mongodb+srv://rababrain:1234@cluster0.a3ofa5v.mongodb.net/?retryWrites=true&w=majority", (event)=>{
    console.log("Connected to DB")
}).catch(e => console.log(e))

app.get('/', (req, res) => {
    res.send("Hello world from get method")
})


app.listen(4000);
