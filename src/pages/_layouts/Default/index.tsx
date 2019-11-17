import PropTypes from 'prop-types'
import React from 'react'

// import { Content, Wrapper } from './styled'

import Header from '../../../components/Header'

const DefaultLayout: React.FC = ({ children }) => (
  <main>
    <Header />
    <section>{children}</section>
  </main>
)

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default DefaultLayout
