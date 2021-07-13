import { combineReducers } from 'redux';

import teamsReducer from './teams/teams.reducer';

const rootReducer = combineReducers({
  counter: teamsReducer,
});

export default rootReducer;