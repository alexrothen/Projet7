// Imports

import React, { useRef } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import ImgLogo from '../assets/icon-left-font copie.png'
import { Margin } from './Margin'
import { Color } from '../color'
import '../index.css'
import Button from './buttons'

// Styled components
const FormContainer = styled.dialog`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 470px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: -7px 5px 44px 8px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: -7px 5px 44px 8px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: -7px 5px 44px 8px rgba(0, 0, 0, 0.15);
`

const Input = styled.input`
  margin: auto;
  font-weight: bold;
  display: flex;
  width: 250px;
  line-height: 1.5;
  border: none;
  border-bottom : 1px dashed lightgrey;
  outline : none;
`

const Img = styled.img`
  margin: auto;
  display: flex;
  height: 65px;
`

const Span = styled.span`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Color.red};
`

export function ModalForm () {
  const { register, errors, handleSubmit, watch } = useForm({})
  const password = useRef({})
  password.current = watch('password', '')

  const onSubmit = data => console.log(data)

  return (
    <FormContainer open>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Img src={ImgLogo} />
        <Margin direction='vertical' margin='3.5em' />
        <label htmlFor='email' />
        <Input
          htmlFor='email'
          name='email'
          type='email'
          placeholder='E-MAIL'
          aria-invalid={errors.email ? 'true' : 'false'}
          ref={register({
            required: 'E-mail requis'
          })}
        />
        {errors.email && <Span>{errors.email.message}</Span>}
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
        <Margin direction='vertical' margin='3.5em' />
        <Button type='submit'>S'INSCRIRE</Button>
      </form>
    </FormContainer>
  )
}
