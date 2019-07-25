
exports.up = function (knex) {
    return knex.schema.createTable('posts', table => {
        table.increments();
        table.text('title', 128).unique().notNullable();
        table.text('description', 128);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('posts');
};
