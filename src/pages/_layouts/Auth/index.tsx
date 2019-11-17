import PropTypes from 'prop-types'
import React from 'react'

import { Content, Wrapper } from './styled'

const AuthLayout: React.FC = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
)

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AuthLayout
