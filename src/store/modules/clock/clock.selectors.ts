import { createSelector } from 'reselect'
import { BareClockEntry, ClockStoreState } from '../../../types'

const getData = (state: ClockStoreState) => state.data

export const getKeyedData = createSelector([getData], data =>
  data.reduce(
    (acc, e) => ({ ...acc, [e.id]: e }),
    {} as { [id: number]: BareClockEntry }
  )
)

export const getMatchedData = createSelector([getData], data =>
  data
    .filter(e => !e.clock_in)
    .map(clockIn => ({
      in: clockIn,
      out: data.find(o => o.clock_in === clockIn.id) || null,
    }))
)

export const getLastOpenClockIn = createSelector(
  [getMatchedData],
  matchedData => {
    const missingClockOut = matchedData.find(e => !e.out) || null
    return missingClockOut && missingClockOut.in.id
  }
)
