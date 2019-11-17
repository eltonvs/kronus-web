import { DateTime } from 'luxon'
import { string } from 'prop-types'

// Forms
interface Props<T> {
  name: string
  label?: string
  multiline?: T
}
export declare type InputProps = JSX.IntrinsicElements['input'] & Props<false>
export declare type TextAreaProps = JSX.IntrinsicElements['textarea'] &
  Props<true>

export interface SignUpFormData {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

export interface SignInFormData {
  email: string
  password: string
}

// Models
export interface BaseUser {
  id: number
  email: string
  full_name: string
}

export interface ClockEntry {
  id: number
  time: DateTime
  clock_in: number | null
  clock_out: number | null
}

// Store States
export interface AuthStoreState {
  token: string | null
  signed: boolean
  loading: boolean
}

export type BareClockEntry = Omit<ClockEntry, 'time'> & { time: string }
export interface ClockStoreState {
  // keyedData: { [id: number]: BareClockEntry }
  data: Array<BareClockEntry>
  loading: boolean
  error: any
}

export interface UserStoreState {
  profile: BaseUser | null
}
