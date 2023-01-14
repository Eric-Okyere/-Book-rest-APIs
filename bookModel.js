let bookDb = require("./bookDb")

class BookModel {
    constructor({title, author, description}){
        this.title = title;
        this.author = author;
        this.description = description
    }

    save(){
        bookDb.push(this);
        return this;
    }

    static all(){
        return bookDb
    }


    static updateBooks(updatebook = {}){
        bookDb = bookDb.map(book =>{
            if(book.title===updatebook.title){
                return {...book, ...updatebook};
            }
            return book;
        });
    }

static delete({title}){
    let deletedBk = null;
    bookDb = bookDb.filter(book =>{
        console.log(book.title === title)
        if(book.title !== title){
            return true
        }
        deletedBk= book;
        return false;
    });
     return deletedBk
}

}
module.exports = BookModel;

