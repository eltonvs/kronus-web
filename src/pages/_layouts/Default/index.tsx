import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styled'

import Header from '../../../components/Header'

const DefaultLayout: React.FC = ({ children }) => (
  <S.Wrapper>
    <Header />
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default DefaultLayout
