const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case '@teams/GET_TEAMS_SUCCESS':
      return payload.teams;
    default:
      return state;
  }
};
