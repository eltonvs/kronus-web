import { all } from 'redux-saga/effects'

import auth from './auth/auth.sagas'
import clock from './clock/clock.sagas'
import user from './user/user.sagas'

export default function* rootSaga() {
  return yield all([auth, clock, user])
}
