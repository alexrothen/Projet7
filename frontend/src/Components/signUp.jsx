// Imports

import React from 'react'
import { useFormContext } from 'react-hook-form'
import ImgLogo from '../assets/icon-left-font-monochrome-black.png'
import { Margin } from '../styles/margin'
import { Form, Input, Img, Span, SpanMessage, BlockInput } from '../styles/formStyle.js'
import '../index.css'
import { ButtonConnect } from './buttons'

export const SignUpForm = ({
  onClickToggle,
  onClickSubmit,
  onSubmit,
  disabled
}) => {
  const { register, errors } = useFormContext()

  return (
    <Form onSubmit={onSubmit}>
      <Img src={ImgLogo} />
      <BlockInput>
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
        <label htmlFor='username' />
        <Input
          name='username'
          type='text'
          placeholder="NOM D'UTILISATEUR"
          aria-invalid={errors.username ? 'true' : 'false'}
          ref={register()}
        />
        {errors.username && <Span>{errors.username.message}</Span>}
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
      </BlockInput>
      <Margin direction='vertical' margin='2.5em' />
      <ButtonConnect disabled={disabled} onClick={onClickSubmit} type='submit'>
        CONNEXION
      </ButtonConnect>
      <Margin direction='vertical' margin='2em' />
      <SpanMessage onClick={onClickToggle}>Déjà inscrit ?</SpanMessage>
    </Form>
  )
}
