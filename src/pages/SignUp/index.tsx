import React from 'react'
import { Link } from 'react-router-dom'

import { InputProps } from '~/types'
import * as S from './styled'

import LabeledInput from '~/components/LabeledInput'
import SubmitButton from '~/components/SubmitButton'

const inputs: InputProps[] = [
  {
    label: 'User Name',
    type: 'text',
    validated: false,
    id: 'name',
  },
  {
    label: 'Email',
    type: 'email',
    validated: false,
    id: 'email',
  },
  {
    label: 'Password',
    type: 'password',
    validated: false,
    id: 'password',
  },
  {
    label: 'Re-Enter Password',
    type: 'password',
    validated: false,
    id: 'password-confirm',
  },
].map(e => ({ ...e, validateField: null }))

function submitForm(e: React.FormEvent) {
  e.preventDefault()
}

const SignUp: React.FC = () => {
  const inputsMapped = inputs.map((e, idx) => <LabeledInput key={idx} {...e} />)

  return (
    <S.SignUpWrapper>
      <section>
        <h1>Sign Up</h1>
        <hr />
        <form onSubmit={submitForm}>
          {inputsMapped}
          <SubmitButton />
        </form>
        <div className="signup-link">
          <p className="in-out">
            Already have an account? <Link to="/">Log-In Here</Link>
          </p>
        </div>
      </section>
    </S.SignUpWrapper>
  )
}

export default SignUp
