// Imports

import React from 'react'
import { useFormContext } from 'react-hook-form'
import ImgLogo from '../assets/icon-left-font-monochrome-black.png'
import { Margin } from './margin'
import { Form, Input, Img, Span, SpanMessage } from './form'
import '../index.css'
import Button from './buttons'

export function LoginForm ({ onClick, onSubmit }) {
  const { register, errors, formState } = useFormContext()

  const { isSubmitting } = formState

  return (
    <Form onSubmit={onSubmit}>
      <Margin direction='vertical' margin='1em' />
      <Img src={ImgLogo} />
      <Margin direction='vertical' margin='1em' />
      <label htmlFor='username' />
      <Input
        name='username'
        type='text'
        placeholder="NOM D'UTILISATEUR OU E-MAIL"
        aria-invalid={errors.username ? 'true' : 'false'}
        ref={register()}
      />
      {errors.username && <Span>{errors.username.message}</Span>}
      <Margin direction='vertical' margin='2em' />
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
      <Margin direction='vertical' margin='1.5em' />
      <Button disabled={isSubmitting} type='submit'>
        CONNEXION
      </Button>
      <Margin direction='vertical' margin='1.5em' />
      <SpanMessage onClick={onClick}>Pas encore inscrit ?</SpanMessage>
      <Margin direction='vertical' margin='1.5em' />
    </Form>
  )
}
