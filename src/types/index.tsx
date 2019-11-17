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

export interface AuthStoreState {
  token: string | null
  signed: boolean
  loading: boolean
}
