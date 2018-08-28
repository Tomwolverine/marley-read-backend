
exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors', table => {
        table.increments();
        table.string("author_first_name",1000);
        table.string("author_last_name", 1000);
        table.string("author_biography", 2000);
        table.string("author_portrait_url", 1000);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('authors')
};
