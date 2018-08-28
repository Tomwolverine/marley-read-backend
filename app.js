const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 9000
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json( ))
const books = require('./routes/books')
const authors = require('./routes/authors')

app.use('/books', books);
app.use('/authors', authors);

// app.use((req, res, next) => {
//     const err = new Error("Not Found");
//     err.status = 404;
//     next(err);
// });

// app.use((err, req, res, next) => {
//     res
//     .status(err.status || 500)
//     .json({
//         message: err.message,
//         error: req.app.get("env") === "development" ? err.stack : {}
// });

app.listen(port, ( ) => { console.log(`I am listening on ${port}`) })