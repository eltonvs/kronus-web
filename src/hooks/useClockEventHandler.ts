import { DateTime } from 'luxon'
import { useDispatch } from 'react-redux'

import { useSelector } from '../store'
import {
  createClockInRequest,
  createClockOutRequest,
} from '../store/modules/clock/clock.actions'
import { getLastOpenClockIn } from '../store/modules/clock/clock.selectors'

function useClockEventHandler() {
  const dispatch = useDispatch()
  const lastOpenClockIn = getLastOpenClockIn(useSelector(state => state.clock))

  const handleClockEvent = () => {
    const time = DateTime.utc()
    console.log(time.zoneName)
    if (lastOpenClockIn) {
      dispatch(createClockOutRequest({ time, clockIn: lastOpenClockIn }))
    } else {
      dispatch(createClockInRequest({ time }))
    }
  }

  return { isClockIn: lastOpenClockIn === null, handleClockEvent }
}

export default useClockEventHandler
