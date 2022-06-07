'use strict'

function onInit() {
    createBooks()
    renderBooks()
    console.log('gBooks:', gBooks)
}


function renderBooks() {
    var books = getBooks()
    var strHtml = books.map((book) => {
        return `<tr> 
                <td> ${book.id} </td>
                <td> ${book.name} </td>
                <td> ${book.price} </td>
                <td> <img src="img/${book.imgUrl}"/> </td>
                <td> <button class="read" onclick="onReadBook('${book.id}')" data-trans="read"> Read </button> </td>
                <td> <button class="update" onclick="onUpdateBook('${book.id}')" data-trans="update"> Update </button> </td>
                <td> <button class="delete" onclick="onRemoveBook('${book.id}')" data-trans="delete"> Delete </button> </td>
            </tr>`
    }
    )
    document.querySelector('tbody').innerHTML = strHtml.join('')
    doTrans()
}

function onRemoveBook(bookId) {
    // console.log('bookId:',bookId)
    removeBook(bookId)
    renderBooks()
}

function onAddBook() {
    console.log('Adding a book:')
    var name = prompt('Please enter the book name')
    var price = +prompt('Please enter the book price')
    if (!name || !price) return
    addBook(name, price)
    renderBooks()
}

function onUpdateBook(bookId) {
    console.log('Updating...')
    const book = getBookById(bookId)
    var bookPrice = +prompt('Please enter a new price', book.price)
    if (!bookPrice || bookPrice === book.price) return
    updateBook(bookId, bookPrice)
    renderBooks()
}

function onReadBook(bookId) {
    console.log('Reading...:', bookId)
    var book = getBookById(bookId)

    var elModal = document.querySelector('.modal')
    console.log(elModal);
    elModal.querySelector('h3').innerText = book.name
    elModal.querySelector('.spn-price').innerText = ' ' + book.price
    elModal.querySelector('.image').innerHTML = `<img src="img/${book.imgUrl}"/>`

    // renderRating(bookId)

    elModal.classList.add('open')
}

function onRateBook(diff, bookId) {
    console.log('bookId in controller:', bookId)
    rateBook(diff, bookId)
}


function renderRating(bookId) {

    var book = getBookById(bookId)
    console.log('book:', book)
    var strHtml =
        `<button onclick="console.log('book:',${book})">-</button>
        <span>${book.rate}</span>
        <button onclick="console.log('book:',${book})">+</button>`

    var elRating = document.querySelector('.rating')
    elRating.innerHTML = strHtml
}

function onCloseModal() {
    document.querySelector('.modal').classList.remove('open')
}

function onSetLang(lang) {
    setLang(lang)
    if (lang === "he") document.body.classList.add("rtl")
    else document.body.classList.remove("rtl")
    doTrans()
}