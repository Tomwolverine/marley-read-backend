const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get("/", (request, response, next) => {
    queries.list('authors')
    .then(authors => {
        response.json({authors});
    })
    .catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id)
    .then(authors => {
        authors
            ? response.json({authors})
            : response.status(404).json({message: 'Not found'})
    })
    .catch(next);
});
module.exports = router;