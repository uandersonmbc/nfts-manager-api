import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Nfts extends BaseSchema {
  protected tableName = 'nfts';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.string('name').notNullable();
      table.string('slug').notNullable();
      table.string('link', 255).notNullable();
      table.json('configs').notNullable();
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
