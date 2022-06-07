'use strict'

var gCurrLang = 'en'
var gTrans = {
    title: {
        en: 'Welcome to my Book Shop!',
        he: 'ברוכים הבאים לחנות הספרים שלי!'
    },
    'new-book': {
        en: 'Create new book',
        he: 'צור ספר חדש'
    },
    id: {
        en: 'id',
        he: 'מק"ט'
    },
    'book-title': {
        en: 'Title',
        he: 'כותרת'
    },
    price: {
        en: 'Price',
        he: ' מחיר'
    },
    image: {
        en: 'image',
        he: 'תמונה'
    },
    action: {
        en: 'Action',
        he: 'פעולות נוספות'
    },
    image: {
        en: 'image',
        he: 'תמונה'
    },
    read: {
        en: 'Read',
        he: 'קרא בהרחבה'
    },
    update: {
        en: 'Update',
        he: 'עדכן'
    },
    delete: {
        en: 'Delete',
        he: 'מחק'
    },
    close: {
        en: 'Close',
        he: 'סגור'
    },
    rating: {
        en: 'Rating',
        he: 'דירוג'
    }
}

function setLang(lang) {
    gCurrLang = lang
}

function getTrans(transKey) {
    var keyTrans = gTrans[transKey];
    if (!keyTrans) return "UNKNOWN";

    var txt = keyTrans[gCurrLang] // he
    if (!txt) txt = keyTrans.en

    return txt
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]')
    els.forEach(el => {
        var transKey = el.dataset.trans
        var txt = getTrans(transKey)

        el.innerText = txt

        // if(el.localName === "input") {
        //     el.setAttribute("placeholder",txt)
        //     // el.placeholder = txt
        // } else el.innerText = txt 
    })
}