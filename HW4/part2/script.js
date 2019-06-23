var LibraryBook = function(title, year, author) {
    var title = title
    var year = year
    var author = author
    var readerName = ''
    var readerData = ''
    function giveTheBook(client) {
        readerName = client
        readerData = new Date().toLocaleTimeString()
    }
    this.getBookInfo = function () {
        readerName ? 
                    console.log(`Книга выдана: ${readerName}, Дата выдачи: ${readerData}`) : 
                            console.log('Книга в наличии')
    }
    this.getTheBook = function(client) {
        readerName === '' ? giveTheBook(client) : null
    }
    this.returnBook = function() {
        readerName = ''
        readerData = ''
    }
}

var books = []
books [0] = new LibraryBook ( "Мартин Иден", "2008", "Джек Лондон" )
books [1] = new LibraryBook ( "Собор Парижской Богоматери", "1997", "Виктор Гюго" )
books [2] = new LibraryBook ( "Белое облако Чингисхана", "1990", "Чингиз Айтматов" )
console.log ( books )

books [0].getTheBook("Иван Иванов")
books [1].getTheBook("Иван Петров")
books [0].getBookInfo()
books [1].getBookInfo()
books [0].returnBook()
books [0].getBookInfo()