import { toast } from 'react-toastify'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'
import {
  createClockInFailure,
  createClockInSuccess,
  createClockOutFailure,
  createClockOutSuccess,
  deleteClockEntryFailure,
  deleteClockEntrySuccess,
  fetchClockLogFailure,
  fetchClockLogSuccess,
  updateClockEntryFailure,
  updateClockEntrySuccess,
} from './clock.actions'

export function* fetchClockLogAsync({ page }: ReturnType<any>) {
  try {
    const response = yield call(api.get, 'clock/log', { params: { page } })
    yield put(fetchClockLogSuccess(response.data))
  } catch (error) {
    toast.error('Error trying to fetch clock log')
    yield put(fetchClockLogFailure())
  }
}

export function* deleteClockEntryAsync({ id }: ReturnType<any>) {
  try {
    yield call(api.delete, `clock/${id}`)

    yield put(deleteClockEntrySuccess(id))
  } catch (error) {
    toast.error('Error trying to delete clock entry.')
    yield put(deleteClockEntryFailure(error.message))
  }
}

export function* updateClockEntryAsync({ clockIn, clockOut }: ReturnType<any>) {
  try {
    const clockOutPayload = clockOut && {
      out_pk: clockOut.id,
      out_time: clockOut.time,
    }
    const response = yield call(api.put, `clock/${clockIn.id}`, {
      time: clockIn.time,
      ...clockOutPayload,
    })

    yield put(updateClockEntrySuccess(response.data))
  } catch (error) {
    console.error(error)
    toast.error('Error trying to update clock entry.')
    yield put(updateClockEntryFailure(error.message))
  }
}

export function* createClockInAsync({ payload }: ReturnType<any>) {
  try {
    const response = yield call(api.post, 'clock/clock-in', payload)

    yield put(createClockInSuccess(response.data))
  } catch (error) {
    toast.error(error.message)
    yield put(createClockInFailure(error.message))
  }
}

export function* createClockOutAsync({ payload }: ReturnType<any>) {
  console.log(payload)
  try {
    const response = yield call(api.post, 'clock/clock-out', {
      time: payload.time,
      clock_in: payload.clockIn,
    })

    yield put(createClockOutSuccess(response.data))
  } catch (error) {
    toast.error(error.message)
    yield put(createClockOutFailure(error.message))
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_SUCCESS', fetchClockLogAsync),
  takeLatest('@clock/FETCH_CLOCK_LOG_REQUEST', fetchClockLogAsync),
  takeLatest('@clock/DELETE_CLOCK_ENTRY_REQUEST', deleteClockEntryAsync),
  takeLatest('@clock/UPDATE_CLOCK_ENTRY_REQUEST', updateClockEntryAsync),
  takeLatest('@clock/CREATE_CLOCK_IN_REQUEST', createClockInAsync),
  takeLatest('@clock/CREATE_CLOCK_OUT_REQUEST', createClockOutAsync),
])
