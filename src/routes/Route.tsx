import React from 'react'

import { Redirect, Route, RouteProps } from 'react-router-dom'

import PropTypes from 'prop-types'

interface RouteWrapperProps extends RouteProps {
  isPrivate?: boolean
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({ isPrivate, ...rest }) => {
  if (isPrivate) {
    return <Redirect to="/" />
  }
  return <Route {...rest} />
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}

export default RouteWrapper
