import { toast } from 'react-toastify'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'
import history from '../../../services/history'

import { signFailure, signInSuccess } from './auth.actions'

export function* signIn({ payload }: ReturnType<any>) {
  try {
    const { email, password } = payload

    const response = yield call(api.post, 'auth/login', {
      email,
      password,
    })
    const { token, user } = response.data

    if (!user) {
      toast.error('User not found')
      return
    }

    // define header authorization
    api.defaults.headers.Authorization = `JWT ${token}`

    yield put(signInSuccess(token, user))

    history.push('/dashboard')
  } catch (error) {
    toast.error('Authentication error, check your data')
    yield put(signFailure())
  }
}

export function* signUp({ payload }: ReturnType<any>) {
  try {
    const { name, email, password } = payload

    yield call(api.post, 'users/', {
      full_name: name,
      email,
      password,
    })

    history.push('/')
  } catch (error) {
    toast.error('Signup error, check your data')
    yield put(signFailure())
  }
}

export function setToken({ payload }: ReturnType<any>) {
  if (!payload) return

  const { token } = payload.auth
  if (token) {
    api.defaults.headers.Authorization = `JWT ${token}`
  }
}

export function logOut() {
  history.push('/')
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/LOG_OUT', logOut),
])
