const User = use('App/Models/User');
const Kue = use('Kue');
const Job = use('App/Jobs/InvitationEmail');

const InviteHook = (exports = module.exports = {});

InviteHook.sendInvitationEmail = async (invite) => {
  const { email } = invite;
  const userAlreadyRegistered = await User.findBy('email', email);

  if (userAlreadyRegistered) {
    await userAlreadyRegistered.teams().attach(invite.team_id);
  } else {
    const user = await invite.user().fetch();
    const team = await invite.team().fetch();

    Kue.dispatch(Job.key, { user, team, email }, { attempts: 3 });
  }
};
