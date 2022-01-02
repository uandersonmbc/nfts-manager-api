import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Investments extends BaseSchema {
  protected tableName = 'investments';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'));
      table.integer('user_nft_id').unsigned().references('id').inTable('users_nfts');

      table.decimal('amount', 8, 4).notNullable();
      table.decimal('price_per_token', 8, 4).notNullable();
      table.decimal('price', 8, 4).notNullable();
      table.decimal('transaction_fee', 8, 4).notNullable();
      table.integer('type').notNullable();
      table.dateTime('registered_at').notNullable();

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
