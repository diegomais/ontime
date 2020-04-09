import axios from 'axios';
import { store } from '~/store';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  const { activeTeam: team } = store.getState().teams;

  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (team) {
    headers.Team = team.slug;
  }

  return { ...config, headers };
});

export default api;
