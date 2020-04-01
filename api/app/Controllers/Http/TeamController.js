/**
 * Resourceful controller for interacting with teams
 */
class TeamController {
  /**
   * Show a list of all teams from user.
   * GET teams
   */
  async index({ auth }) {
    const teams = await auth.user.teams().fetch();

    return teams;
  }

  /**
   * Create/save a new team.
   * POST teams
   */
  async store({ request, auth }) {
    const data = request.only(['name']);

    const team = await auth.user.teams().create({
      ...data,
      user_id: auth.user.id,
    });

    return team;
  }

  /**
   * Display a single team.
   * GET teams/:id
   */
  async show({ params, auth }) {
    const team = await auth.user.teams().where('teams.id', params.id).first();

    return team;
  }

  /**
   * Update team details.
   * PUT or PATCH teams/:id
   */
  async update({ params, request, auth }) {
    const data = request.only(['name']);
    const team = await auth.user.teams().where('teams.id', params.id).first();

    team.merge(data);

    await team.save();

    return team;
  }

  /**
   * Delete a team with id.
   * DELETE teams/:id
   */
  async destroy({ params, auth }) {
    const team = await auth.user.teams().where('teams.id', params.id).first();

    await team.delete();
  }
}

module.exports = TeamController;
