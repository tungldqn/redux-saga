import { put, takeEvery, takeLatest, all } from 'redux-saga/effects';

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' })
}

export function* decrementAsync() {
  // yield delay(5000);
  yield put({ type: 'DECREMENT' })
}

export function* watchIncrementAsync() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}

export function* watchDecrementAsync() {
  yield takeLatest('DECREMENT_ASYNC', decrementAsync)
}

export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    watchDecrementAsync()
  ])
}
