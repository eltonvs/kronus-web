import { Form, SubmitHandler } from '@rocketseat/unform'
import React from 'react'
import * as Yup from 'yup'

import LabeledInput from '~/components/LabeledInput'
import SubmitButton from '~/components/SubmitButton'

interface SignUpFormParams {
  submitForm: SubmitHandler
  loading: boolean
}

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid Email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Inform 6 characters min')
    .required('Password is required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null])
    .required('Password Confirmation is required'),
})

const SignUpForm: React.FC<SignUpFormParams> = ({ submitForm, loading }) => (
  <Form schema={schema} onSubmit={submitForm}>
    <LabeledInput label="User Name" type="text" name="name" id="name" />
    <LabeledInput label="Email" type="email" name="email" id="email" />
    <LabeledInput
      label="Password"
      type="password"
      name="password"
      id="password"
    />
    <LabeledInput
      label="Confirm Password"
      type="password"
      name="passwordConfirm"
      id="passwordConfirm"
    />
    <SubmitButton loading={loading} />
  </Form>
)

export default SignUpForm
