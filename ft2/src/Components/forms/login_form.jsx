import React from 'react'
import { useFormContext } from 'react-hook-form'
import ImgLogo from '../../assets/icon-left-font-monochrome-dark.svg'
import { Margin } from '../../utils/styles/margin'
import { Form, Img, Span, SpanMessage, BlockInput } from './form_style.js'
import '../../index.css'
import { ButtonConnect } from '../buttons/buttons'
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react'

export const LoginForm = ({
  onClickSubmit,
  onClickToggle,
  onSubmit,
  disabled,
  isLoading
}) => {
  const { register, errors } = useFormContext()

  return (
    <Form onSubmit={onSubmit}>
      <Img src={ImgLogo} />
      <BlockInput>
        <FormControl
          display='flex'
          flexDirection='column'
          m='auto'
          isInvalid={errors.username}
          alignItems='center'
        >
          <FormLabel w='230px' htmlFor='username'>Adresse e-mail</FormLabel>

          <Input
            w='250px'
            name='username'
            type='text'
            placeholder="NOM D'UTILISATEUR OU E-MAIL"
            aria-invalid={errors.username ? 'true' : 'false'}
            ref={register()}
          />
          <FormErrorMessage>
            {errors.username && errors.username.message}
          </FormErrorMessage>
        </FormControl>
        <Margin direction='vertical' margin='1.2em' />
        <FormControl
          isInvalid={errors.password}
          display='flex'
          flexDirection='column'
          m='auto'
          alignItems='center'
        >
          <FormLabel w='230px' htmlFor='password'>Mot de passe</FormLabel>
          <Input
            w='250px'
            htmlFor='password'
            name='password'
            type='password'
            placeholder='MOT DE PASSE'
            aria-invalid={errors.password ? 'true' : 'false'}
            ref={register()}
          /> <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
      </BlockInput>
      <Margin direction='vertical' margin='2.5em' />
      <ButtonConnect disabled={disabled} onClick={onClickSubmit} isLoading={isLoading} type='submit'>
        CONNEXION
      </ButtonConnect>

      <Margin direction='vertical' margin='2em' />
      <SpanMessage onClick={onClickToggle}>Pas encore inscrit ?</SpanMessage>
    </Form>
  )
}
