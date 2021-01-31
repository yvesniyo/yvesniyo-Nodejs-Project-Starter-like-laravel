
let tableName = "users"

exports.up = function (knex) {
    return knex.schema.createTable(tableName, function (table) {
        table.increments();
        table.string("name")
        table.string("email")
        table.string("phone").nullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable(tableName)
};
