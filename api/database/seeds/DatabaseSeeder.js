/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User');

const Role = use('Adonis/Acl/Role');
const Permission = use('Adonis/Acl/Permission');

class DatabaseSeeder {
  async run() {
    const user = await User.create({
      name: 'Diego Mais',
      email: 'diegomais.dev@gmail.com',
      password: '123456',
    });

    const permissionCreateProjects = await Permission.create({
      name: 'Create Projects',
      slug: 'create_projects',
      description: 'Permission to create and update a project',
    });

    const permissionCreateInvites = await Permission.create({
      name: 'Create Invites',
      slug: 'create_invites',
      description: 'Permission to create an invite for a new team member',
    });

    const roleAdmin = await Role.create({
      name: 'Administrator',
      slug: 'administrator',
      description: 'Manage administration privileges',
    });

    const roleModerator = await Role.create({
      name: 'Moderator',
      slug: 'moderator',
      description: 'Manage moderator privileges',
    });

    const roleGuest = await Role.create({
      name: 'Guest',
      slug: 'guest',
      description: 'Use guest privileges',
    });

    // Attach Permissions to Role
    await roleAdmin
      .permissions()
      .attach([permissionCreateProjects.id, permissionCreateInvites.id]);
    await roleModerator.permissions().attach([permissionCreateProjects.id]);

    const team = await user.teams().create({
      name: 'Rocketseat',
      user_id: user.id,
    });

    const teamJoin = await user.teamJoins().where('team_id', team.id).first();

    await teamJoin.roles().attach([roleAdmin.id]);
  }
}

module.exports = DatabaseSeeder;
