import React from 'react'
import { useFormContext } from 'react-hook-form'
import ImgLogo from '../assets/icon-left-font-monochrome-dark.svg'
import { Margin } from '../styles/margin'
import { Form, Input, Img, Span, SpanMessage, BlockInput } from '../styles/formStyle.js'
import '../index.css'
import { ButtonConnect } from './buttons'

export const LoginForm = ({
  onClickSubmit,
  onClickToggle,
  onSubmit,
  disabled
}) => {
  const { register, errors } = useFormContext()

  return (
    <Form onSubmit={onSubmit}>
      <Img src={ImgLogo} />
      <BlockInput>
        <label htmlFor='username' />

        <Input
          name='username'
          type='text'
          placeholder="NOM D'UTILISATEUR OU E-MAIL"
          aria-invalid={errors.username ? 'true' : 'false'}
          ref={register()}
        />
        {errors.username && <Span>{errors.username.message}</Span>}
        <Margin direction='vertical' margin='1.2em' />
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
      </BlockInput>
      <Margin direction='vertical' margin='2.5em' />
      <ButtonConnect disabled={disabled} onClick={onClickSubmit} type='submit'>
        CONNEXION
      </ButtonConnect>
      <Margin direction='vertical' margin='2em' />
      <SpanMessage onClick={onClickToggle}>Pas encore inscrit ?</SpanMessage>
    </Form>
  )
}
