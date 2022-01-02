import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Wallets extends BaseSchema {
  protected tableName = 'wallets';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'));
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');

      table.string('name').notNullable();
      table.string('account_address');
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('crex1ated_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
