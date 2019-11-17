import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styled'

const AuthLayout: React.FC = ({ children }) => (
  <S.Wrapper>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AuthLayout
