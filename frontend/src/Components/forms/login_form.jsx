import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import '../../index.css'
import {
  Input,
  InputRightElement,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
  Text,
  InputGroup,
  IconButton
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Color } from '../../utils/styles/color'
import { FormContainer } from './form_container'
import { ButtonForm } from '../buttons/buttons'

export const LoginForm = ({
  onClickSubmit,
  onClickToggle,
  onSubmit,
  disabled,
  isLoading
}) => {
  const { register, errors } = useFormContext()

  const [show, setShow] = useState(false)
  const toggleShow = () => setShow(!show)

  return (
    <FormContainer onSubmit={onSubmit}>
      <Stack
        spacing='1.2em'
        display='flex'
        h='200px'
        flexDirection='column'
        justifyContent='center'
      >

        <FormControl
          display='flex'
          id='email'
          flexDirection='column'
          m='auto'
          isInvalid={errors.email}
          alignItems='center'
          isRequired
        >
          <FormLabel w='250px' htmlFor='email'>Adresse e-mail</FormLabel>
          <Input
            focusBorderColor={errors.email ? Color.red : Color.accent}
            errorBorderColor={Color.red}
            w='270px'
            name='email'
            type='email'
            placeholder='e-mail'
            aria-invalid={errors.email ? 'true' : 'false'}
            ref={register()}
          />
          <FormErrorMessage>
            {errors.email && <Text color={Color.red}>{errors.email.message}</Text>}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={errors.password}
          display='flex'
          flexDirection='column'
          m='auto'
          alignItems='center'
          id='password'
          isRequired
        >
          <FormLabel w='250px' htmlFor='password'>Mot de passe</FormLabel>
          <InputGroup w='270px'>
            <Input
              errorBorderColor={Color.red}
              focusBorderColor={errors.password ? Color.red : Color.accent}
              w='270px'
              htmlFor='password'
              name='password'
              type={show ? 'text' : 'password'}
              placeholder='mot de passe'
              aria-invalid={errors.password ? 'true' : 'false'}
              ref={register()}
            />
            <InputRightElement width='2rem'>
              <IconButton aria-label={show ? 'Cacher le mot passe' : 'Afficher le mot de passe'} size='sm' onClick={toggleShow} variant='solid' icon={show ? <ViewOffIcon /> : <ViewIcon />} />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.password && <Text color={Color.red}>{errors.password.message}</Text>}
          </FormErrorMessage>
        </FormControl>
      </Stack>
      <Stack mt='60px' h='90px' spacing='0.5rem'>

        <ButtonForm
          disabled={disabled}
          onClick={onClickSubmit}
          isLoading={isLoading}
          onClickToggle={onClickToggle}
          switchText='Pas encore inscrit ?'
        >
          CONNEXION
        </ButtonForm>

      </Stack>
    </FormContainer>
  )
}
