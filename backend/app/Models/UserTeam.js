const Model = use('Model');

class UserTeam extends Model {
  /**
   * Setting up traits to UserTeam model because the user
   * can have different roles and permissions on each team.
   */
  static get traits() {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission',
    ];
  }

  role() {
    return this.belongsToMany('Adonis/Acl/Role');
  }

  permission() {
    return this.belongsToMany('Adonis/Acl/Permission');
  }

  user() {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = UserTeam;
