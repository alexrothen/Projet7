import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Modal as Dialog, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { SignUpForm } from '../forms/signUp_form'
import { LoginForm } from '../forms/login_form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signUpSchema, loginSchema } from '../../utils/schemas/schemas'
// import useMediaQuery from '@material-ui/core/useMediaQuery'
// import { useTheme } from '@material-ui/core/styles'
import '../../index.css'

export const Modal = ({ open, close, onOpen }) => {
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
      isOpen={open}
      onOpen={onOpen}
      isCentered
      w='100%'
    >
      <ModalOverlay style={{ backdropFilter: 'blur(0.5em)' }} />
      <ModalContent>
        {login
          ? (
            <FormProvider {...loginMethods}>
              <LoginForm
                onSubmit={loginMethods.handleSubmit(onSubmit)}
                onClickToggle={() => toggleLogin(false)}
                onClickSubmit={close}
                isLoading={loginMethods.formState.isSubmitting}
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
      </ModalContent>
    </Dialog>
  )
}
