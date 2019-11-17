import produce from 'immer'

const INITIAL_STATE = {
  profile: null,
}

export default function reducer(
  state = INITIAL_STATE,
  { type, payload }: { type: string; payload: any }
) {
  return produce(state, draft => {
    switch (type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = payload.user
        break
      }

      case '@auth/SIGN_OUT': {
        draft.profile = null
        break
      }

      default:
    }
  })
}
