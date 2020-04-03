const User = use('App/Models/User');

const InviteHook = (exports = module.exports = {});

InviteHook.sendInvitationEmail = async (invite) => {
  const { email } = invite;
  const userAlreadyRegistered = await User.findBy('email', email);

  if (userAlreadyRegistered) {
    await userAlreadyRegistered.teams().attach(invite.team_id);
  } else {
    console.log('User must sign up!');

    // TODO: Send e-mail
  }
};
