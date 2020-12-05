// Imports

import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import ImgLogo from '../assets/icon-left-font-monochrome-black.png'
import { Margin } from './Margin'
import { Color } from '../color'
import '../index.css'
import Button from './buttons'
import { Dialog } from '@material-ui/core'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Styled components
const Form = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 470px;
  border: none;
  background-color: transparent;
`

const Input = styled.input`
  margin: 0 auto;
  font-weight: bold;
  font-size: 1em;
  display: flex;
  width: 250px;
  border: none;
  border-bottom: 1px dashed ${Color.grey};
  outline: none;
  &:focus {
    outline: 0;
  }
  ::placeholder {
    color: ${Color.grey};
    font-weight: lighter;
    font-size: 1em;
  }
`

const Img = styled.img`
  margin: auto;
  display: flex;
  width: 280px;
`

const Span = styled.span`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${Color.red};
`
const schema = yup.object().shape({
  email: yup
    .string()
    .email("L'adresse e-mail doit être valide")
    .required('Email requis'),
  username: yup
    .string()
    .matches(
      /^[A-Za-zéèàê0-9(-.')]+$/,
      "Le nom d'utilisateur ne doit pas contenir de caractères spéciaux"
    )
    .required("Nom d'utilisateur requis"),
  password: yup
    .string()
    .required('Mot de passe requis')
    .min(6, 'Le mot de passe doit comporter au moins 6 caractères'),
  passwordConfirmation: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'Les mots de passe ne correspondent pas'
    )
})

export function ModalForm () {
  const { register, errors, handleSubmit, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })
  const { isSubmitSuccessful, isSubmitting } = formState

  const [open, setOpen] = useState(true)

  const handleClose = () => setOpen(false)

  async function dataSubmitted (data) {
    await isSubmitSuccessful
    handleClose()
    console.log(data)
  }

  return (
    <Dialog open={open} style={{ backdropFilter: 'blur(5px)' }}>
      <Form onSubmit={handleSubmit(dataSubmitted)}>
        <Margin direction='vertical' margin='1em' />
        <Img src={ImgLogo} />
        <Margin direction='vertical' margin='1em' />
        <label htmlFor='email' />
        <Input
          htmlFor='email'
          name='email'
          type='email'
          placeholder='E-MAIL'
          aria-invalid={errors.email ? 'true' : 'false'}
          ref={register()}
        />
        {errors.email && <Span>{errors.email.message}</Span>}
        <Margin direction='vertical' margin='1em' />

        <label htmlFor='username' />
        <Input
          name='username'
          type='text'
          placeholder="NOM D'UTILISATEUR"
          aria-invalid={errors.username ? 'true' : 'false'}
          ref={register()}
        />
        {errors.username && <Span>{errors.username.message}</Span>}
        <Margin direction='vertical' margin='1em' />

        <label htmlFor='password' />
        <Input
          htmlFor='password'
          name='password'
          type='password'
          placeholder='MOT DE PASSE'
          aria-invalid={errors.password ? 'true' : 'false'}
          ref={register()}
        />
        {errors.password && <Span>{errors.password.message}</Span>}
        <Margin direction='vertical' margin='1em' />

        <label htmlFor='passwordConfirmation' />
        <Input
          htmlFor='passwordConfirmation'
          name='passwordConfirmation'
          type='password'
          placeholder='CONFIRMER LE MOT DE PASSE'
          aria-invalid={errors.passwordConfirmation ? 'true' : 'false'}
          ref={register()}
        />
        {errors.passwordConfirmation && (
          <Span>{errors.passwordConfirmation.message}</Span>
        )}
        <Margin direction='vertical' margin='1.5em' />
        <Button disabled={isSubmitting} type='submit'>
          S'INSCRIRE
        </Button>
        <Margin direction='vertical' margin='1.5em' />
      </Form>
    </Dialog>
  )
}
