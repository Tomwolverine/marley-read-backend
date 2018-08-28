const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get("/", (request, response, next) => {
    queries.list()
    .then(books => {
        response.json({books});
    })
    .catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id)
    .then(books => {
        books
            ? response.json({books})
            : response.status(404).json({message: 'Not found'})
    })
    .catch(next);
});

module.exports = router;