import { DateTime } from 'luxon'
import React, { useState, useEffect } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { ClockEntry as ClockEntryType } from '../../types'
import ClockActionButtons from './ClockActionButtons'
import * as S from './styled'

import useClockEntryRemoval from '../../hooks/useClockEntryRemoval'
import useClockEntryUpdate from '../../hooks/useClockEntryUpdate'
import { useSelector } from '../../store'

interface ClockEntryProps {
  clockIn: ClockEntryType
  clockOut: ClockEntryType | null
}

function sameDayFormat(date1: DateTime, date2: DateTime) {
  return date1.hasSame(date2, 'day')
    ? DateTime.TIME_SIMPLE
    : DateTime.DATETIME_SHORT
}

function createElement(
  entry: ClockEntryType,
  formatOptions: Intl.DateTimeFormatOptions,
  isUpdating: boolean,
  updateAction: (entry: ClockEntryType) => void
) {
  if (isUpdating) {
    return (
      <DatePicker
        selected={entry.time.toJSDate()}
        onChange={date => {
          updateAction({
            ...entry,
            time: DateTime.fromJSDate(date || entry.time.toJSDate()),
          })
        }}
        timeInputLabel="Time:"
        dateFormat="MM/dd/yyyy h:mm aa"
        showTimeInput
      />
    )
  }
  return <span>{entry.time.toLocaleString(formatOptions)}</span>
}

const ClockEntry: React.FC<ClockEntryProps> = ({ clockIn, clockOut }) => {
  const { loading, error } = useSelector(data => data.clock)
  const removeEntry = useClockEntryRemoval(clockIn.id)
  const [data, setData] = useState({ clockIn, clockOut, isUpdating: false })

  const updateAction = () => {
    setData({ ...data, isUpdating: true })
  }

  const saveAction = useClockEntryUpdate(data.clockIn, data.clockOut)
  const cancelAction = () => {
    setData({ clockIn, clockOut, isUpdating: false })
  }

  useEffect(() => {
    if (!loading && !error) {
      setData({ ...data, isUpdating: false })
    }
  }, [loading, error])

  useEffect(() => {
    setData({ clockIn, clockOut, isUpdating: false })
  }, [clockIn, clockOut])

  const clockInDateFormat = sameDayFormat(data.clockIn.time, DateTime.utc())
  let clockElements = createElement(
    data.clockIn,
    clockInDateFormat,
    data.isUpdating,
    entry => {
      setData({ ...data, clockIn: entry })
    }
  )

  if (data.clockOut) {
    const clockOutDateFormat = sameDayFormat(
      data.clockIn.time,
      data.clockOut.time
    )
    const clockOutElement = createElement(
      data.clockOut,
      clockOutDateFormat,
      data.isUpdating,
      entry => {
        setData({ ...data, clockOut: entry })
      }
    )
    clockElements = (
      <>
        {clockElements} - {clockOutElement}
      </>
    )
  }

  return (
    <S.ClockEntryWrapper>
      <div className="container">
        {clockElements}
        <ClockActionButtons
          updateAction={updateAction}
          removeAction={removeEntry}
          saveAction={saveAction}
          cancelAction={cancelAction}
          isUpdating={data.isUpdating}
        />
      </div>
    </S.ClockEntryWrapper>
  )
}

export default ClockEntry
