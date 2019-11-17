import produce from 'immer'
import { AuthStoreState } from '~/types'

const INITIAL_STATE: AuthStoreState = {
  token: null,
  signed: false,
  loading: false,
}

export default function reducer(
  state = INITIAL_STATE,
  { type, payload }: { type: string; payload: any }
) {
  return produce(state, draft => {
    switch (type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true
        break
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = payload.token
        draft.signed = true
        draft.loading = false
        break
      }
      case '@auth/SIGN_FAILURE': {
        draft.signed = false
        draft.loading = false
        break
      }
      case '@auth/LOG_OUT': {
        draft.token = null
        draft.signed = false
        break
      }
      default:
    }
  })
}
