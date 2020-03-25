exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        //incremento: sempre somará um cada vez que um caso for inserido
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //relacionamento com a tabela ong
        table.string('ong_id').notNullable();

        //chave extrangeira 
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');  
};
