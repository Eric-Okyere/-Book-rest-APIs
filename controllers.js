
const BookModel = require("./bookModel")
// controllers
const handleViewBook =(req, res)=>{
     const books = BookModel.all();

  res.json({message: "These are your books", data: books});
  }


  const handleCreateBook =(req, res)=>{
      const {title, author, description} = req.body;
      const book = new BookModel({title, author, description});
  
      book.save()
        res.json({message: "Congratulations!! your book is created successfully", data: book});
      
     
  }



  const handleUpdateBook =(req, res)=>{
      const { title, author, description} = req.body;
      const book = BookModel.updateBooks({title, author, description});
          res.json({message: "update is successful", data: book});
        
      
    };



      // const UpdateBank = BankModel.update({name, location, branch, phone, address, accountNumber})
      // res.json({message: "update successfully"})
  

  const handleDeleteBook =(req, res)=>{
      const {title} = req.body;
       const deletedBook = BookModel.delete({title})
          res.json({message: "bank has been deleted successfully", data: deletedBook});
  }


  
   module.exports = {
    handleCreateBook,
  handleDeleteBook,
    handleViewBook,
    handleUpdateBook
    
   }
