

const Book = require('./book.model');

const postABook = async (req, res) => {
    // console.log(req.body);
    try {
        const newBook = await Book({ ...req.body });
        await newBook.save();
        res.status(200).send({ message: "Book posted successfully", book: newBook })
    } catch (error) {
        console.log("Error creating Book", error);
        res.status(500).send({ message: "Failed to create book" })
    }
}


const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({createdAt:-1});
        res.status(200).send({books })
    } catch (error) {
        res.status(500).send({ message: "Faild to fetch books" })
    }
}


const getSingleBook=async(req,res)=>{
    try {
        const {id}=req.params;
        const book=await Book.findById(id);
        if(!book)
        {
            res.status(404).send({message:"Book not found!"});
        }
        res.status(200).send(book);
    } catch (error) {
        res.status(500).send({message:"Faild to fetch book"});
    }
}


module.exports = {
    postABook, getAllBooks,getSingleBook
}