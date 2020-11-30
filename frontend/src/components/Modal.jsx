// Imports

import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import ImgLogo from '../assets/icon-left-font-monochrome-black.png'
import { Margin } from './Margin'
import { Color } from '../color'
import '../index.css'
import Button from './buttons'
import { Dialog } from '@material-ui/core'

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
  font-size : 1em;
  display: flex;
  width: 250px;
  border: none;
  border-bottom: 1px dashed ${Color.grey}
;
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
  color: ${Color.red};
`

export function ModalForm ({ open, onClose }) {
  const { register, errors, handleSubmit, watch } = useForm({})
  const password = useRef({})
  password.current = watch('password', '')

  const dataSubmitted = data => console.log(data)

  return (
    <Dialog open={open} >
      <Form onSubmit={handleSubmit(dataSubmitted)} onClose={onClose}>
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
          ref={register({
            required: 'E-mail requis',
            pattern: !/\S+@\S+\.\S+/
          })}
        />
        {errors.email && <Span>{errors.email.message}</Span>}
        <Margin direction='vertical' margin='1em' />

        <label htmlFor='username' />
        <Input
          name='username'
          type='text'
          placeholder="NOM D'UTILISATEUR"
          aria-invalid={errors.username ? 'true' : 'false'}
          ref={register({
            required: "Nom d'utilisateur requis",
            minLength: {
              value: 5,
              message:
                "Le nom d'utilisateur doit comporter au moins 5 caractères"
            }
          })}
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
          ref={register({
            required: 'Mot de passe requis',
            minLength: {
              value: 8,
              message: 'Le mot de passe doit comporter au moins 8 caractères'
            }
          })}
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
          ref={register({
            required: 'Confirmer le mot de passe',
            validate: value =>
              value === password.current || (
                <Span>Les mots de passe ne correspondent pas</Span>
              )
          })}
        />
        {errors.passwordConfirmation && (
          <Span>{errors.passwordConfirmation.message}</Span>
        )}
        <Margin direction='vertical' margin='1.5em' />
        <Button type='submit'>S'INSCRIRE</Button>
        <Margin direction='vertical' margin='1.5em' />
      </Form>
    </Dialog>
  )
}
