import { combineReducers } from 'redux';

import auth from './auth/reducer';
import teams from './teams/reducer';
import projects from './projects/reducer';

export default combineReducers({ auth, teams, projects });
