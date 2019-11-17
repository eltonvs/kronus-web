import PropTypes from 'prop-types'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import AuthLayout from '../pages/_layouts/Auth'
import DefaultLayout from '../pages/_layouts/Default'

import { store } from '../store'

const RouteWrapper = ({ component: Component, isPrivate, ...rest }: any) => {
  const { signed } = store.getState().auth
  if (isPrivate && !signed) {
    return <Redirect to="/" />
  }
  if (!isPrivate && signed) {
    return <Redirect to="/dashboard" />
  }

  const Layout = signed ? DefaultLayout : AuthLayout

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}

export default RouteWrapper
