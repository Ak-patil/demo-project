import {all} from 'redux-saga/effects';
export default function* IndedxSaga() {
  yield all([AuthSaga()]);
}
