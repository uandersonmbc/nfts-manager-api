import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class RolesPermissions extends BaseSchema {
  protected tableName = 'roles_permissions';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('role_id').unsigned().references('id').inTable('roles');
      table.integer('permission_id').unsigned().references('id').inTable('permissions');
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
