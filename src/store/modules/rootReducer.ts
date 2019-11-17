import { combineReducers } from 'redux'

import auth from './auth/auth.reducer'
import clock from './clock/clock.reducer'
import user from './user/user.reducer'

export default combineReducers({
  auth,
  clock,
  user,
})
