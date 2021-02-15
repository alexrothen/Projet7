import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Dialog } from '@material-ui/core'
import { SignUpForm } from './signUp'
import { LoginForm } from './login'
import { yupResolver } from '@hookform/resolvers/yup'
import { signUpSchema, loginSchema } from '../schemas/schemas'
// import useMediaQuery from '@material-ui/core/useMediaQuery'
// import { useTheme } from '@material-ui/core/styles'
import '../index.css'

export const Modal = ({ open, close }) => {
  const [login, toggleLogin] = useState(true)
  // const theme = useTheme()
  // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const signUpProps = {
    mode: 'onChange',
    resolver: yupResolver(signUpSchema),
    defaultValues: ''
  }

  const loginProps = {
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
    defaultValues: ''
  }
  const loginMethods = useForm(loginProps)
  const signUpMethods = useForm(signUpProps)

  const onSubmit = data => console.log(data)

  return (
    <Dialog
      // fullScreen={fullScreen}
      open={open}
      disableBackdropClick
      disableEscapeKeyDown
      style={{ backdropFilter: 'blur(0.5em)' }}
    >
      {login
        ? (
          <FormProvider {...loginMethods}>
            <LoginForm
              onSubmit={loginMethods.handleSubmit(onSubmit)}
              onClickToggle={() => toggleLogin(false)}
              onClickSubmit={close}
              disabled={
                loginMethods.formState.isSubmitting ||
                !loginMethods.formState.isValid
              }
            />
          </FormProvider>
          )
        : (
          <FormProvider {...signUpMethods}>
            <SignUpForm
              onSubmit={signUpMethods.handleSubmit(onSubmit)}
              onClickToggle={() => toggleLogin(true)}
              onClickSubmit={close}
              disabled={
                signUpMethods.formState.isSubmitting ||
                !signUpMethods.formState.isValid
              }
            />
          </FormProvider>
          )}
    </Dialog>
  )
}
