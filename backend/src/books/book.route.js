
const express=require('express');

const { postABook, getAllBooks, getSingleBook } = require('./book.controller');
const router=express.Router();

// post a book
router.post('/create-book',postABook)


// get all books
router.get("/",getAllBooks);

//get single book 
router.get("/:id",getSingleBook)



module.exports=router;