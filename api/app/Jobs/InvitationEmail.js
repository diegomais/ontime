const Mail = use('Mail');

class InvitationEmail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency() {
    return 1;
  }

  // This is required. This is a unique key used to identify this job.
  static get key() {
    return 'InvitationEmail-job';
  }

  // This is where the work is done.
  async handle({ user, team, email }) {
    await Mail.send(
      ['emails.invitation'],
      { team: team.name, user: user.name },
      (message) =>
        message
          .to(email)
          .from('noreply@ontime.com', 'Invitation | OnTime')
          .subject(`Invitation to team ${team.name}`)
    );
  }
}

module.exports = InvitationEmail;
