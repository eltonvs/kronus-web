import { Form, SubmitHandler } from '@rocketseat/unform'
import React from 'react'
import * as Yup from 'yup'

import LabeledInput from '~/components/LabeledInput'
import SubmitButton from '~/components/SubmitButton'

interface SignInFormParams {
  submitForm: SubmitHandler
  loading: boolean
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
})

const SignInForm: React.FC<SignInFormParams> = ({ submitForm, loading }) => (
  <Form schema={schema} onSubmit={submitForm}>
    <LabeledInput label="Email" type="email" name="email" id="email" />
    <LabeledInput
      label="Password"
      type="password"
      name="password"
      id="password"
    />
    <SubmitButton loading={loading} />
  </Form>
)

export default SignInForm
