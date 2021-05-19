class Team {
  /**
   * Middleware to set current team in HTTP request.
   */
  async handle({ request, response, auth }, next) {
    const slug = request.header('team');

    let team = null;

    if (slug) {
      team = await auth.user.teams().where('slug', slug).first();
    }

    if (!team) {
      return response.status(401).send();
    }

    auth.user.currentTeam = team.id;
    request.team = team;

    // call next to advance the request
    await next();
  }
}

module.exports = Team;
