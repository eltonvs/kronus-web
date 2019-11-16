import React from 'react'
import { Link } from 'react-router-dom'

import { InputProps } from '~/types'
import * as S from './styled'

import Input from '~/components/LabeledInput'
import SubmitButton from '~/components/SubmitButton'

const inputs: InputProps[] = [
  {
    label: 'User Name',
    type: 'text',
    show: true,
    validated: false,
    id: 'a',
  },
  {
    label: 'Password',
    type: 'password',
    show: true,
    validated: false,
    id: 'b',
  },
].map(e => ({ ...e, validateField: null }))

function submitForm(e: React.FormEvent) {
  e.preventDefault()
}

const Login: React.FC = () => {
  const inputsMapped = inputs.map((e, idx) => <Input key={idx} {...e} />)
  return (
    <S.SignInPage>
      <section>
        <h1>Log In</h1>
        <hr />
        <form onSubmit={submitForm}>
          {inputsMapped}
          <SubmitButton />
        </form>
        <div className="signup-link">
          <p className="in-out">
            Don't have an account? <Link to="/sign-up">Sign-Up Here</Link>
          </p>
        </div>
      </section>
    </S.SignInPage>
  )
}

export default Login
