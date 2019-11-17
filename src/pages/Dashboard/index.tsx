import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styled'

import useClockEntries from '../../hooks/useClockEntries'
import useClockEventHandler from '../../hooks/useClockEventHandler'

import { fetchClockLogRequest } from '../../store/modules/clock/clock.actions'

import Clock from '../../components/Clock'
import ClockEntry from '../../components/ClockEntry'

const Dashboard = () => {
  const { isClockIn, handleClockEvent } = useClockEventHandler()
  const clockEntries = useClockEntries()

  const _clockEntries = clockEntries.map((entries, idx) => (
    <ClockEntry key={idx} {...entries} />
  ))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchClockLogRequest())
  }, [dispatch])

  return (
    <S.DashboardWrapper>
      <Clock />
      <button
        className={`clock-action ${isClockIn ? 'clock-in' : 'clock-out'}`}
        onClick={handleClockEvent}
      >
        <i className="fa fa-clock-o" /> {isClockIn ? 'Clock-In' : 'Clock-Out'}
      </button>
      <hr className="separator" />
      <h3>Clock Log:</h3>
      {_clockEntries}
    </S.DashboardWrapper>
  )
}

export default Dashboard
