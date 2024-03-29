import { SignInFormData } from '../../../types'

export function signInRequest(email: string, password: string) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  }
}

export function signInSuccess(token: string, user: SignInFormData) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  }
}

export function signUpRequest(name: string, email: string, password: string) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  }
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  }
}

export function logOut() {
  return {
    type: '@auth/LOG_OUT',
  }
}
