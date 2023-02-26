const setMsgSchema = (table) => {
  table.increments('id');
  table.string("email").notNullable();
  table.enu('msgType', ['Usuario', 'Sistema']).notNullable();
  table.string("msg").notNullable();
  table.timestamp('fyh').defaultTo(knex.fn.now());
  return table;
};

export default setMsgSchema;

