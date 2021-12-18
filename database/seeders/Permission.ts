import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';

import Permission from 'App/Models/Permission';

export default class PermissionSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Permission.createMany([
      {
        slug: 'create-role',
        name: 'Create role',
        description: 'Create a new role',
      },
      {
        slug: 'read-role',
        name: 'Read role',
        description: 'Read a role',
      },
      {
        slug: 'update-role',
        name: 'Update role',
        description: 'Update a role',
      },
      {
        slug: 'delete-role',
        name: 'Delete role',
        description: 'Delete a role',
      },
      // --------------------------------------------------
      {
        slug: 'create-permission',
        name: 'Create permission',
        description: 'Create a new permission',
      },
      {
        slug: 'read-permission',
        name: 'Read permission',
        description: 'Read a permission',
      },
      {
        slug: 'update-permission',
        name: 'Update permission',
        description: 'Update a permission',
      },
      {
        slug: 'delete-permission',
        name: 'Delete permission',
        description: 'Delete a permission',
      },
      // --------------------------------------------------
      {
        slug: 'create-user',
        name: 'Create user',
        description: 'Create a new user',
      },
      {
        slug: 'read-user',
        name: 'Read user',
        description: 'Read a user',
      },
      {
        slug: 'update-user',
        name: 'Update user',
        description: 'Update a user',
      },
      {
        slug: 'delete-user',
        name: 'Delete user',
        description: 'Delete a user',
      },
    ]);
  }
}
