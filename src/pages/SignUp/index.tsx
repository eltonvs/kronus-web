import { SubmitHandler } from '@rocketseat/unform'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import SignUpForm from '~/components/SignUpForm'

import { useSelector } from '~/store'
import { signUpRequest } from '~/store/modules/auth/auth.actions'

const SignUp: React.FC = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  const submitForm: SubmitHandler = ({ name, email, password }) => {
    dispatch(signUpRequest(name, email, password))
  }

  return (
    <>
      <h1>Sign Up</h1>
      <hr />
      <SignUpForm submitForm={submitForm} loading={loading} />
      <div className="signup-link">
        <p className="in-out">
          Already have an account? <Link to="/">Log-In Here</Link>
        </p>
      </div>
    </>
  )
}

export default SignUp
