const Model = use('Model');

class UserTeam extends Model {
  user() {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = UserTeam;
