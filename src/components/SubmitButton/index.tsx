import React from 'react'

import * as S from './styled'

const defaultProps = {
  loading: false,
}

const SubmitButton = ({ loading }: typeof defaultProps) => (
  <div>
    <hr />
    <S.SubmitButton type="submit" disabled={loading}>
      {loading ? 'Loading...' : 'Submit'}
    </S.SubmitButton>
  </div>
)
SubmitButton.defaultProps = defaultProps

export default SubmitButton
