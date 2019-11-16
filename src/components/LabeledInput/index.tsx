import React from 'react'
import { InputProps } from '~/types'

import * as S from './styled'

const LabeledInput: React.FC<InputProps> = ({
  label,
  type,
  validated,
  id,
  validateField,
}) => (
  <S.LabeledInputWrapper className="animated">
    <label className="label">
      {label}
      <i
        className={validated ? 'fa fa-check animate-check' : ''}
        aria-hidden="true"
      />
    </label>
    <br />
    <input
      className="input"
      type={type}
      onBlur={event => {
        validateField && validateField(event, id)
      }}
    />
  </S.LabeledInputWrapper>
)

export default LabeledInput
