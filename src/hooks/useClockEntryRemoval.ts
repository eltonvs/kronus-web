import { useDispatch } from 'react-redux'

import { deleteClockEntryRequest } from '../store/modules/clock/clock.actions'

function useClockEntryRemoval(clockEntryId: number) {
  const dispatch = useDispatch()

  return () => {
    dispatch(deleteClockEntryRequest(clockEntryId))
  }
}

export default useClockEntryRemoval
