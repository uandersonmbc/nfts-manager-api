import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';

import Role from 'App/Models/Role';

export default class RoleSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await Role.createMany([
      {
        slug: 'admin',
        name: 'Admin',
        description: 'Administrador',
      },
      {
        slug: 'moderator',
        name: 'Moderator',
        description: 'Moderador',
      },
      {
        slug: 'user',
        name: 'User',
        description: 'Usuário',
      },
    ]);
  }
}
