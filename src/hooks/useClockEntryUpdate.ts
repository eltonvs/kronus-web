import { useDispatch } from 'react-redux'

import { updateClockEntryRequest } from '../store/modules/clock/clock.actions'

import { ClockEntry } from '../types'

function useClockEntryUpdate(
  clockIn: ClockEntry,
  clockOut: ClockEntry | null = null
) {
  const dispatch = useDispatch()

  return () => {
    dispatch(updateClockEntryRequest(clockIn, clockOut))
  }
}

export default useClockEntryUpdate
