import produce from 'immer'
import { BareClockEntry, ClockStoreState } from '../../../types'

const INITIAL_STATE: ClockStoreState = {
  data: [],
  loading: false,
  error: null,
}

export default function reducer(
  state = INITIAL_STATE,
  { type, payload, error }: { type: string; payload: any; error: any }
) {
  return produce(state, draft => {
    switch (type) {
      case '@clock/FETCH_CLOCK_LOG_REQUEST':
      case '@clock/DELETE_CLOCK_ENTRY_REQUEST':
      case '@clock/UPDATE_CLOCK_ENTRY_REQUEST':
      case '@clock/CREATE_CLOCK_IN_REQUEST':
      case '@clock/CREATE_CLOCK_OUT_REQUEST': {
        draft.loading = true
        break
      }

      case '@clock/FETCH_CLOCK_LOG_SUCCESS': {
        const data = payload.data as BareClockEntry[]
        draft.data = data
        draft.loading = false
        draft.error = null
        break
      }

      case '@clock/FETCH_CLOCK_LOG_FAILURE': {
        draft.loading = false
        break
      }

      case '@clock/DELETE_CLOCK_ENTRY_SUCCESS': {
        draft.loading = false
        draft.error = null
        draft.data = draft.data.filter(
          e => e.id !== payload.id && e.clock_in !== payload.id
        )
        break
      }

      case '@clock/DELETE_CLOCK_ENTRY_FAILURE':
      case '@clock/UPDATE_CLOCK_ENTRY_FAILURE':
      case '@clock/CREATE_CLOCK_IN_FAILURE':
      case '@clock/CREATE_CLOCK_OUT_FAILURE': {
        draft.loading = false
        draft.error = error
        break
      }

      case '@clock/UPDATE_CLOCK_ENTRY_SUCCESS': {
        const { clockIn, clockOut } = payload
        draft.loading = false
        draft.error = null
        console.log(draft.data)
        console.log(clockIn)
        draft.data = draft.data.map(e => {
          if (e.id === clockIn.id) {
            return { ...e, time: clockIn.time }
          }
          if (clockOut && e.id === clockOut.id) {
            return { ...e, time: clockOut.time }
          }
          return e
        })
        break
      }

      case '@clock/CREATE_CLOCK_IN_SUCCESS':
      case '@clock/CREATE_CLOCK_OUT_SUCCESS': {
        const { clockEntry } = payload
        draft.loading = false
        draft.error = null
        draft.data.push(clockEntry)
        if (clockEntry.clock_in) {
          draft.data = draft.data.map(e =>
            e.id === clockEntry.clock_in
              ? { ...e, clock_out: clockEntry.id }
              : e
          )
        }
        break
      }

      case '@auth/SIGN_OUT': {
        draft = INITIAL_STATE
        break
      }

      default:
    }
  })
}
