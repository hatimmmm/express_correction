import Book from '../models/Book.js'
import {writeBook, readBooks} from "../utils/fsHelper.js"

const allBooks = (req, res) => {
  readBooks((books) => {
    res.render("index", {books})
  })
}

const getBook = (req,res) => {
  readBooks((books) => {
    const book = books.find(e => e.id == req.params.id)
    res.render("book", {book})
  })
}

const addBook = (req,res) => {

  readBooks((books) => {
    const new_id = books[books.length - 1].id + 1
    const new_data = new Book(new_id,  "Hyperion",  "Dan Simmons", 1992)
    books.push(Object.assign({}, new_data))
    writeBook(books, ()=>{
      console.log("Book is added ! ")
      res.render("index", {books})
    })
  })

}

const deleteBook = (req,res) => {
  readBooks((books)=> {
    const deletedBooks = books.filter(e => e.id != req.params.id)
    writeBook(deletedBooks, ()=>{
      res.render("index", {books})
    })
  })
}

export {allBooks, getBook, addBook , deleteBook}
