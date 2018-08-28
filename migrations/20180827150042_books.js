
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', table => {
        table.increments();
        table.string("book_title", 1000);
        table.string("book_genre", 1000);
        table.string("book_description", 2000);
        table.string("book_cover_url", 1000);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('books');
};
