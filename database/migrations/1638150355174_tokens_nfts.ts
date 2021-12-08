import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class TokensNfts extends BaseSchema {
  protected tableName = 'tokens_nfts';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('token_id').unsigned().references('id').inTable('tokens');
      table.integer('nft_id').unsigned().references('id').inTable('nfts');

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
