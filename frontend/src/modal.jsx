import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Dialog } from '@material-ui/core'
import { SignUpForm } from './signUp'
import { LoginForm } from './login'
import { yupResolver } from '@hookform/resolvers/yup'
import { signUpSchema, loginSchema } from './schemas'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

export const Modal = ({ open, close }) => {
  const [login, toggleLogin] = useState(true)

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  // const signUpValues = {
  //   email: 'alex.rothenburger@gmail.com',
  //   username: 'alexis',
  //   password: 'aaaaaaaa',
  //   passwordConfirmation: 'aaaaaaaa'
  // }

  // const loginValues = {
  //   username: 'alexis',
  //   password: 'aaaaaaaa'
  // }

  const signUpProps = useForm({
    mode: 'onChange',
    resolver: yupResolver(signUpSchema),
    defaultValues: ''
  })

  const loginProps = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
    defaultValues: ''
  })

  const onSubmit = data => console.log(data)

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      style={{ backdropFilter: 'blur(4px)' }}
    >
      {login ? (
        <FormProvider {...loginProps}>
          <LoginForm
            onSubmit={loginProps.handleSubmit(onSubmit)}
            onClickToggle={() => toggleLogin(false)}
            onClickSubmit={close}
          />
        </FormProvider>
      ) : (
        <FormProvider {...signUpProps}>
          <SignUpForm
            onSubmit={signUpProps.handleSubmit(onSubmit)}
            onClickToggle={() => toggleLogin(true)}
            onClickSubmit={close}
          />
        </FormProvider>
      )}
    </Dialog>
  )
}
