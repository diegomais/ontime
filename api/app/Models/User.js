const Model = use('Model');

const Hash = use('Hash');

class User extends Model {
  static boot() {
    super.boot();

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   */
  tokens() {
    return this.hasMany('App/Models/Token');
  }

  /**
   * A relationship on user_teams is required for
   * role and permissions based on each team to work.
   * Since the user can have different roles and
   * permissions on each team.
   */
  teamJoins() {
    return this.hasMany('App/Models/UserTeam');
  }

  teams() {
    return this.belongsToMany('App/Models/Team').pivotModel(
      'App/Models/UserTeam'
    );
  }

  /**
   * Overwrite is function from Adonis ACL to get
   * role based on current team sent in request headers.
   */
  async is(expression) {
    const team = await this.teamJoins()
      .where('team_id', this.currentTeam)
      .first();

    return team.is(expression);
  }

  /**
   * Overwrite can function from Adonis ACL to get
   * role based on current team sent in request headers.
   */
  async can(expression) {
    const team = await this.teamJoins()
      .where('team_id', this.currentTeam)
      .first();

    return team.can(expression);
  }

  /**
   * Overwrite scope function from Adonis ACL to get
   * role based on current team sent in request headers.
   */
  async scope(required) {
    const team = await this.teamJoins()
      .where('team_id', this.currentTeam)
      .first();

    return team.scope(required);
  }
}

module.exports = User;
