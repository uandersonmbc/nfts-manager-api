import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class UsersRoles extends BaseSchema {
  protected tableName = 'users_roles';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.integer('role_id').unsigned().references('id').inTable('roles');

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
