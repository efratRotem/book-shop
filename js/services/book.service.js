'use strict'

const STORAGE_KEY = 'bookDB'
const gNames = [
    'Maasee BeChamisha Balonim',
    'HaArye SheAhav Tut',
    'HaZachal HaRaev',
    'HaBait Shel Yael',
    'Pilim BeChol HaZtvaaim',
    'Sir HaSirim',
    'Chatul Gadol Chatul Katan',
    'Dardasit',
    'Shalom Lach Orachat',
    'Meaah Shirim Rishonim'
]
const NEW_IMG_URl = 'new.jpeg'

var gBooks


function getBooks() {
    return gBooks
}

function createBooks() {
    _creatBooks()
}

function removeBook(bookId) {
    const deletedBookIdx = gBooks.findIndex((book) => book.id === bookId)
    
    gBooks.splice(deletedBookIdx, 1)
    _saveBooksToStorage()
}

function addBook(name, price) {
    var newBook = _createBook(name, NEW_IMG_URl, price)
    gBooks.unshift(newBook)
    _saveBooksToStorage
    console.log('gBooks:', gBooks)
}

function updateBook(bookId, bookPrice) {

    var updatedBook = gBooks.find(book => book.id === bookId)
    updatedBook.price = bookPrice
    _saveBooksToStorage
}

function rateBook(book, diff) {

    book.rate += diff
    console.log('book:', book)
    console.log('diff:',diff)
    // if (book.rate === 0 || book.rate === 10) return
    // book.rate += diff
    // _saveBooksToStorage
}

function getBookById(bookId) {
    return gBooks.find(book => book.id === bookId)
}

function _creatBooks() {
    var books = loadFromStorage(STORAGE_KEY)
    // Nothing in storage - generate demo data
    if (!books || !books.length) {
        books = []

        for (let i = 0; i < 10; i++) {
            var name = gNames[i]
            var imgUrl = `${i}.jpeg`

            books.push(_createBook(name, imgUrl))
        }
    }
    gBooks = books
    console.log('gBooks:', gBooks)
    _saveBooksToStorage()
}

function _createBook(name, imgUrl, price = getRandomIntInclusive(30, 100), rate = 0) {
    return {
        id: makeId(),
        name,
        price,
        imgUrl,
        rate
    }
}

function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}

