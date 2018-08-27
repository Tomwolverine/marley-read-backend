
exports.up = function(knex, Promise) {
    return knex.schema.creatTable('authors', table => {
        table.increments();
        table.string("author_first_name");
        table.string("author_last_name");
        table.string("author_biography");
        table.string("author_portrait_url");
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('authors')
};
