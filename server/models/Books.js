const mongoose = require('mongoose');
const BooksSchema = mongoose.Schema({
    title:{
        type: 'string',
        required: true
    },
    description: {
        type: 'string'
    }
});

module.exports = mongoose.model('books', BooksSchema);