import { DateTime } from 'luxon'

import { useSelector } from '../store'
import { getMatchedData } from '../store/modules/clock/clock.selectors'

function useClockEntries() {
  const matchedData = getMatchedData(useSelector(state => state.clock))

  const toDateTime = (time: string) => DateTime.fromISO(time)

  return matchedData.map(({ in: clockIn, out: clockOut }) => ({
    clockIn: { ...clockIn, time: toDateTime(clockIn.time) },
    clockOut: clockOut && { ...clockOut, time: toDateTime(clockOut.time) },
  }))
}

export default useClockEntries
