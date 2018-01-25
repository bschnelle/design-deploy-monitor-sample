import { fork, put, takeEvery } from 'redux-saga/effects';

import apiService from '../services/api';

import * as instanceActions from '../data/instances/actions';
import * as systemActions from '../data/systems/actions';

function* loadInstances({ payload: systemID }) {
  yield put(instanceActions.beginLoading());
  const instances = yield apiService.loadInstances(systemID);
  yield put(instanceActions.loadInstances(instances));
}

function* loadSystems() {
  yield put(systemActions.beginLoading());
  const systems = yield apiService.loadSystems();
  yield put(systemActions.loadSystems(systems));
}

function* sagas() {
  yield takeEvery('user/LOAD_INSTANCES', loadInstances);
  yield takeEvery('user/LOAD_SYSTEMS', loadSystems);
}

export function* rootSaga() {
  yield fork(sagas);
}
