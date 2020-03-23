const Model = use('Model');

class Team extends Model {
  users() {
    return this.belongsToMany('App/Models/User').pivotModel(
      'App/Models/UserTeam'
    );
  }
}

module.exports = Team;
