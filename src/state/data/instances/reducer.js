import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  instances: [],
});

const beginLoading = state => state.set('loading', true);

const loadInstances = (state, { payload }) => state.merge({
  loading: false,
  instances: payload,
});

export const reducer = handleActions({
  'instances/BEGIN_LOADING': beginLoading,
  'instances/LOAD_INSTANCES': loadInstances,
}, initialState);
