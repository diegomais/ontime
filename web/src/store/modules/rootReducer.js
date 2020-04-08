import { combineReducers } from 'redux';

import auth from './auth/reducer';
import teams from './teams/reducer';

export default combineReducers({ auth, teams });
