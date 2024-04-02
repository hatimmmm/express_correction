import fs from "fs"

const readBooks = (callback) => {
  fs.readFile('db/books.json', (err, data) => {
    if (err) throw err
    callback(JSON.parse(data))
  })
}

const writeBook = (books, callback) => {
  const data = JSON.stringify(books, null, 2)
  fs.writeFile('db/books.json', data , (err)=> {
    if (err) throw err
    callback()
  })
}

export {writeBook, readBooks}
