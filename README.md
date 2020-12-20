# Book Store UI
Books UI app using ReactJS

## Getting the code on your computer
- [ ] Download and install <a href="https://nodejs.org/en/download/" target="_blank">Node.js</a>
- [ ] Download the project or clone it from https://github.com/diogo-santos/book-store-ui
- [ ] Download the Books API project from https://github.com/diogo-santos/books-read-api and follow the instructions
- [ ] Download the Books API project from https://github.com/diogo-santos/books-write-api and follow the instructions

Execute the lines:
```
cd book-store-ui
echo "REACT_APP_GOOGLE_BOOKS_API_URL=https://www.googleapis.com/books/v1/volumes?q=" >> .env.local
echo "REACT_APP_READ_API_URL=http://localhost:5000/books" >> .env.local
echo "REACT_APP_WRITE_API_URL=http://localhost:5001/books" >> .env.local
```

```
npm install
npm start
```

#### What I have developed
- [ ] Search books from Google Web API
- [ ] Save book
- [ ] Pagination component
- [ ] Delete Book
- [ ] Testing components with react test library
