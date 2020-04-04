const User = use('App/Models/User');
const Invite = use('App/Models/Invite');

class UserController {
  async store({ request, response, auth }) {
    const data = request.only(['name', 'email', 'password']);

    const checkIfUserHasBeenInvited = Invite.query().where('email', data.email);
    const teamsInvited = await checkIfUserHasBeenInvited.pluck('team_id');

    if (teamsInvited.length === 0) {
      return response
        .status(401)
        .send({ message: "You're not invited to any team." });
    }

    const user = await User.create(data);

    await user.teams().attach(teamsInvited);

    await checkIfUserHasBeenInvited.delete();

    const token = await auth.attempt(data.email, data.password);

    return token;
  }
}

module.exports = UserController;
