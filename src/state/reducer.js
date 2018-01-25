import { combineReducers } from 'redux';

import { reducer as instances } from './data/instances/reducer';
import { reducer as systems } from './data/systems/reducer';

export const reducers = {
  instances,
  systems,
};

export default combineReducers(reducers);
