const database = require("./database-connection");

module.exports = {
    list() {
        return database('galvanize-reads').select().orderBy('id', 'asc');
        }
}