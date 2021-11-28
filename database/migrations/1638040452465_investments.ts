import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Investments extends BaseSchema {
  protected tableName = 'investments';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer('user_nft_id').unsigned().references('id').inTable('users_nfts');

      table.decimal('amount', 8, 4).notNullable();
      table.decimal('total_tokens', 8, 4).notNullable();
      table.decimal('token_price', 8, 4).notNullable();
      table.decimal('fee', 8, 4).notNullable();

      table.integer('buy_sell').notNullable();
      table.dateTime('purchased_at').notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
