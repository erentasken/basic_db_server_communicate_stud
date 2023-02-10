const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:')

db.serialize(()=>{
    db.run(`
    CREATE TABLE books (
        ISBN INT PRIMARY KEY,
        title TEXT NOT NULL,
        publication_date TEXT NOT NULL,
        publisher TEXT NOT NULL
    )
    `)
    db.run(`
    INSERT INTO books (ISBN, title, publication_date, publisher)
    VALUES (1234567890123, 'Example Book', '2022-01-01', 'Example Publisher')
    `)
})

module.exports = db

