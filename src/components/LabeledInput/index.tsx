import { Input } from '@rocketseat/unform'
import React from 'react'
import { InputProps, TextAreaProps } from '~/types'

import * as S from './styled'

type LabeledInputProps = (InputProps | TextAreaProps) & { label: string }

const LabeledInput: React.FC<LabeledInputProps> = ({ label, ...args }) => (
  <S.LabeledInputWrapper className="animated">
    <label className="label">{label}</label>
    <br />
    <Input className="input" {...args} />
  </S.LabeledInputWrapper>
)

export default LabeledInput
