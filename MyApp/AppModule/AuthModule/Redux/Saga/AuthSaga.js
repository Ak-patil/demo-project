import {LoginActions} from '../Action/AuthActionConst';

function* proceedLoginViaEmailPassword(action) {}

function* AuthSaga() {
  yield all([
    takeLeading(
      LoginActions.LOGIN_WITH_USERNAME_AND_PASSWORD,
      proceedLoginViaEmailPassword,
    ),
  ]);
}
