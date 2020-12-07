// Imports

import React from 'react'
import { useFormContext } from 'react-hook-form'
import ImgLogo from '../assets/icon-left-font-monochrome-black.png'
import { Margin } from './margin'
import { Form, Input, Img, Span, SpanMessage, BlockInput } from './formStyle'
import '../index.css'
import Button from './buttons'

export function LoginForm ({ onClick, onSubmit }) {
  const { register, errors, formState } = useFormContext()

  const { isSubmitting } = formState

  return (
    <Form onSubmit={onSubmit}>
      <Img src={ImgLogo} /> <label htmlFor='username' />
      <BlockInput>
        <Input
          name='username'
          type='text'
          placeholder="NOM D'UTILISATEUR OU E-MAIL"
          aria-invalid={errors.username ? 'true' : 'false'}
          ref={register()}
        />
        {errors.username && <Span>{errors.username.message}</Span>}
        <label htmlFor='password' />
        <Margin direction='vertical' margin='1.2em' />
        <Input
          htmlFor='password'
          name='password'
          type='password'
          placeholder='MOT DE PASSE'
          aria-invalid={errors.password ? 'true' : 'false'}
          ref={register()}
        />
        {errors.password && <Span>{errors.password.message}</Span>}
      </BlockInput>
      <Margin direction='vertical' margin='2.5em' />
      <Button disabled={isSubmitting} type='submit'>
        CONNEXION
      </Button>
      <Margin direction='vertical' margin='2em' />
      <SpanMessage onClick={onClick}>Pas encore inscrit ?</SpanMessage>
    </Form>
  )
}
