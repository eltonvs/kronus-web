import { DateTime } from 'luxon'

import { ClockEntry } from '../../../types'

/* Fetch Clock Log */
export function fetchClockLogRequest(page = 1) {
  return {
    type: '@clock/FETCH_CLOCK_LOG_REQUEST',
    page,
  }
}

export function fetchClockLogSuccess(data: ClockEntry[]) {
  return {
    type: '@clock/FETCH_CLOCK_LOG_SUCCESS',
    payload: { data },
  }
}

export function fetchClockLogFailure() {
  return {
    type: '@clock/FETCH_CLOCK_LOG_FAILURE',
  }
}

/* Delete Clock Entry */
export function deleteClockEntryRequest(id: number) {
  return {
    type: '@clock/DELETE_CLOCK_ENTRY_REQUEST',
    id,
  }
}

export function deleteClockEntrySuccess(id: number) {
  return {
    type: '@clock/DELETE_CLOCK_ENTRY_SUCCESS',
    payload: { id },
  }
}

export function deleteClockEntryFailure(error: any) {
  return {
    type: '@clock/DELETE_CLOCK_ENTRY_FAILURE',
    error,
  }
}

/* Update Clock Entry */
export function updateClockEntryRequest(
  clockIn: ClockEntry,
  clockOut: ClockEntry | null
) {
  return {
    type: '@clock/UPDATE_CLOCK_ENTRY_REQUEST',
    clockIn,
    clockOut,
  }
}

export function updateClockEntrySuccess({
  clock_in: clockIn,
  clock_out: clockOut,
}: {
  clock_in: ClockEntry
  clock_out: ClockEntry | null
}) {
  return {
    type: '@clock/UPDATE_CLOCK_ENTRY_SUCCESS',
    payload: { clockIn, clockOut },
  }
}

export function updateClockEntryFailure(error: any) {
  return {
    type: '@clock/UPDATE_CLOCK_ENTRY_FAILURE',
    error,
  }
}

/* Create Clock-in */
export function createClockInRequest({ time }: { time: DateTime }) {
  return {
    type: '@clock/CREATE_CLOCK_IN_REQUEST',
    payload: {
      time,
    },
  }
}

export function createClockInSuccess(clockEntry: ClockEntry) {
  return {
    type: '@clock/CREATE_CLOCK_IN_SUCCESS',
    payload: { clockEntry },
  }
}

export function createClockInFailure(error: any) {
  return {
    type: '@clock/CREATE_CLOCK_IN_FAILURE',
    error,
  }
}

/* Create Clock-out */
export function createClockOutRequest({
  time,
  clockIn,
}: {
  time: DateTime
  clockIn: number
}) {
  return {
    type: '@clock/CREATE_CLOCK_OUT_REQUEST',
    payload: {
      time,
      clockIn,
    },
  }
}

export function createClockOutSuccess(clockEntry: ClockEntry) {
  return {
    type: '@clock/CREATE_CLOCK_OUT_SUCCESS',
    payload: { clockEntry },
  }
}

export function createClockOutFailure(error: any) {
  return {
    type: '@clock/CREATE_CLOCK_OUT_FAILURE',
    error,
  }
}
