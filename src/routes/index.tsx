import React from 'react'
import { Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

import Route from './Route'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/dashboard" isPrivate component={Dashboard} />
  </Switch>
)

export default Routes
