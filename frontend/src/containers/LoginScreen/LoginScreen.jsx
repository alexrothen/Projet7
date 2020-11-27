// Imports

import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import ImgLogo from '../../assets/icon-left-font copie.png'
import { Margin } from '../../components/Margin'
import { Color } from '../../color'
import '../../index.css'

// Styled components

const FormContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 470px;
  border-radius: 10px;
  box-shadow: -7px 5px 44px 8px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: -7px 5px 44px 8px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: -7px 5px 44px 8px rgba(0, 0, 0, 0.15);
`

const Input = styled.input`
  font-weight: bold;
  display: block;
  margin: auto;
  width: 250px;
  line-height: 1.4;
`

const Img = styled.img`
  margin: auto;
  display: flex;
  height: 65px;
`

const SignUpButton = styled.button`
  display: block;
  margin: auto;
  font-weight: black;
  cursor: pointer;
  border: transparent;
  outline: none;
  border-radius: 4px;
  transition: ease-in-out all 180ms;
  background-color: ${Color.red};
  color: white;
  font-weight: bold;
  width: 115px;
  height: 2.5em;
  :hover {
    opacity: 0.75;
  }
`

const Span = styled.span`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Color.red};
`

export function LoginScreen () {
  const { register, errors, handleSubmit, watch } = useForm({})
  const password = useRef({})
  password.current = watch('password', '')

const onSubmit = data => console.log(data)

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Img src={ImgLogo} />
        <Margin direction='vertical' margin='4em' />
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
        <Margin direction='vertical' margin='0.5em' />
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
        <Margin direction='vertical' margin='0.5em' />
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
        <Margin direction='vertical' margin='0.5em' />
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
        <Margin direction='vertical' margin='5em' />
        <SignUpButton type='submit'>S'INSCRIRE</SignUpButton>
      </form>
    </FormContainer>
  )
}
