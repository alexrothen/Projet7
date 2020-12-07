import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Dialog } from '@material-ui/core'
import { SignUpForm } from '../components/signUp'
import { LoginForm } from '../components/login'
import { yupResolver } from '@hookform/resolvers/yup'
import { signUpSchema, loginSchema } from '../components/schemas'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

export function Modal () {
  const [open, setOpen] = useState(true)
  const [login, toggleLogin] = useState(true)

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const { isSubmitSuccessful } = useForm()

  const signUpValues = {
    email: 'alex.rothenburger@gmail.com',
    username: 'alexis',
    password: 'aaaaaaaa',
    passwordConfirmation: 'aaaaaaaa'
  }

  const loginValues = {
    username: 'alexis',
    password: 'aaaaaaaa'
  }

  const signUpProps = useForm({
    mode: 'onChange',
    resolver: yupResolver(signUpSchema),
    defaultValues: signUpValues
  })

  const loginProps = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
    defaultValues: loginValues
  })

  async function handleClose (data) {
    await isSubmitSuccessful
    setOpen(false)
    console.log(data)
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      style={{ backdropFilter: 'blur(4px)' }}
    >
      {login
        ? (
          <FormProvider {...loginProps}>
            <LoginForm
              onSubmit={loginProps.handleSubmit(handleClose)}
              onClick={() => toggleLogin(false)}
            />
          </FormProvider>
          )
        : (
          <FormProvider {...signUpProps}>
            <SignUpForm
              onSubmit={signUpProps.handleSubmit(handleClose)}
              onClick={() => toggleLogin(true)}
            />
          </FormProvider>
          )}
    </Dialog>
  )
}
