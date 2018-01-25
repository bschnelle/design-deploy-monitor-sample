import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  systems: [],
});

const beginLoading = state => state.set('loading', true);

const loadSystems = (state, { payload }) => state.merge({
  loading: false,
  systems: payload,
});

export const reducer = handleActions({
  'systems/BEGIN_LOADING': beginLoading,
  'systems/LOAD_SYSTEMS': loadSystems,
}, initialState);
