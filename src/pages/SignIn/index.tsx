import { SubmitHandler } from '@rocketseat/unform'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import SignInForm from '../../components/SignInForm'

import { useSelector } from '../../store'
import { signInRequest } from '../../store/modules/auth/auth.actions'

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  const submitForm: SubmitHandler = ({ email, password }) => {
    dispatch(signInRequest(email, password))
  }

  return (
    <>
      <h1>Log In</h1>
      <hr />
      <SignInForm submitForm={submitForm} loading={loading} />
      <div className="signup-link">
        <p className="in-out">
          Don't have an account? <Link to="/sign-up">Sign-Up Here</Link>
        </p>
      </div>
    </>
  )
}

export default Login
