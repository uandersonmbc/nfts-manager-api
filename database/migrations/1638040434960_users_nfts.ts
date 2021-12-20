import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class UsersNfts extends BaseSchema {
  protected tableName = 'users_nfts';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('name').notNullable();
      table.string('account_address').nullable();

      table.integer('user_id').unsigned().references('id').inTable('users');
      table.integer('nft_id').unsigned().references('id').inTable('nfts');

      table.json('data').nullable();

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
