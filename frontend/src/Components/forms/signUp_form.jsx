import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import ImgLogo from '../../assets/icon-left-font-monochrome-dark.svg'
import { Form, Img } from './form_style.js'
import '../../index.css'
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
  Text,
  Link,
  Button
} from '@chakra-ui/react'
import { Color } from '../../utils/styles/color'

export const SignUpForm = ({
  onClickToggle,
  onClickSubmit,
  onSubmit,
  disabled,
  isLoading
}) => {
  const { register, errors } = useFormContext()
  const [matchingBorders, setMatchingBorders] = useState('inherit')
  // faire e.target.value pour changer la couleur

  // TODO : masquer le mot de passe




  return (
    <Form onSubmit={onSubmit}>
      <Stack spacing='1em' mt='70px' h='210px' justifyContent='center'>
        <Img src={ImgLogo} />
        <FormControl
          display='flex'
          flexDirection='column'
          m='auto'
          isInvalid={errors.email}
          alignItems='center'
          paddingTop='110px'
          isRequired
          id='email'
        >
          <FormLabel w='230px' htmlFor='email'>Adresse e-mail</FormLabel>
          <Input
            focusBorderColor={errors.email ? Color.red : Color.accent}
            errorBorderColor={Color.red}
            w='250px'
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
          isRequired
          id='password'
        >
          <FormLabel w='230px' htmlFor='password'>Mot de passe</FormLabel>
          <Input
            errorBorderColor={Color.red}
            focusBorderColor={errors.password ? Color.red : Color.accent}
            w='250px'
            borderColor={matchingBorders}
            name='password'
            type='password'
            placeholder='mot de passe'
            aria-invalid={errors.password ? 'true' : 'false'}
            ref={register()}
          />
          <FormErrorMessage>
            {errors.password && <Text color={Color.red}>{errors.password.message}</Text>}
          </FormErrorMessage>

          <FormLabel my={3} w='230px' htmlFor='passwordConfirmation'>Confirmer le mot de passe</FormLabel>
          <Input
            errorBorderColor={Color.red}
            focusBorderColor={errors.passwordConfirmation ? Color.red : Color.accent}
            w='250px'
            name='passwordConfirmation'
            type='password'
            placeholder='Confirmer le mot de passe'
            aria-invalid={errors.passwordConfirmation ? 'true' : 'false'}
            ref={register()}
          />
          <FormErrorMessage>
            {errors.passwordConfirmation && <Text color={Color.red}>{errors.passwordConfirmation.message}</Text>}
          </FormErrorMessage>
        </FormControl>

      </Stack>
      <Stack mt='120px' h='80px' spacing={3}>

        <Button
          _hover={{ color: Color.bgColorDark, bg: Color.bgGrey }}
          color='whiteAlpha.800' bg={Color.accent}
          border='2px' borderColor={Color.accent} m='auto'
          boxShadow='2xl' w='150px'
          disabled={disabled}
          onClick={onClickSubmit}
          isLoading={isLoading}
          type='submit'
        >
          S'INSCRIRE
        </Button>
        <Link display='flex' justifyContent='center' size='sm' _hover={{ color: Color.accent }} onClick={onClickToggle}>Déjà inscrit ?</Link>
      </Stack>
    </Form>
  )
}
