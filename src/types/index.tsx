export type FieldValidator<E> = (e: E, id: string) => void

export interface InputProps {
  label: string
  type: string
  validated: boolean
  id: string
  validateField: FieldValidator<React.FocusEvent<HTMLInputElement>> | null
}
