import React from 'react'
import { useFormContext } from 'react-hook-form'
import LogoDark from '../../assets/icon-left-font-monochrome-dark.svg'
import LogoLight from '../../assets/icon-left-font-monochrome-grey.svg'
// import { Form, Img } from './form_style.js'
import '../../index.css'
import {
  Box,
  Center,
  Img,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
  Text,
  Link,
  Button,
  useColorModeValue
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
  const LogoSwitcher = useColorModeValue(LogoDark, LogoLight)

  return (
    <Box
      as='form'
      display='flex'
      flexDirection='column'
      h='540px'
      onSubmit={onSubmit}
    >
      <Center h='170px'>
        <Img
          w='280px'
          src={LogoSwitcher}
        />
      </Center>
      <Stack
        spacing='1em'
        display='flex'
        h='200px'
        flexDirection='column'
        justifyContent='center'
      >
        <FormControl
          display='flex'
          flexDirection='column'
          m='auto'
          isInvalid={errors.email}
          alignItems='center'
          isRequired
          id='email'
        >
          <FormLabel w='250px' htmlFor='email'>Adresse e-mail</FormLabel>
          <Input
            focusBorderColor={errors.email ? Color.red : Color.accent}
            errorBorderColor={errors.email ? Color.red : Color.accent}
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
          isRequired
          id='password'
        >
          <FormLabel w='250px' htmlFor='password'>Mot de passe</FormLabel>
          <Input
            errorBorderColor={errors.password ? Color.red : Color.accent}
            focusBorderColor={errors.password ? Color.red : Color.accent}
            w='270px'
            name='password'
            placeholder='mot de passe'
            aria-invalid={errors.password ? 'true' : 'false'}
            ref={register()}
            type='password'
          />

          <FormErrorMessage>
            {errors.password && <Text color={Color.red}>{errors.password.message}</Text>}
          </FormErrorMessage>

          <FormLabel my={3} w='250px' htmlFor='passwordConfirmation'>Confirmer le mot de passe</FormLabel>
          <Input
            errorBorderColor={errors.password ? Color.red : Color.accent}
            focusBorderColor={errors.passwordConfirmation ? Color.red : Color.accent}
            w='270px'
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
      <Stack mt='60px' h='90px' spacing='0.5rem'>

        <Button
          variant='solid'
          bg={Color.accent}
          m='auto'
          boxShadow='2xl'
          w='150px'
          disabled={disabled}
          onClick={onClickSubmit}
          isLoading={isLoading}
          type='submit'
        >
          S'INSCRIRE
        </Button>
        <Link display='flex' justifyContent='center' size='sm' _hover={{ color: Color.accent }} onClick={onClickToggle}>Déjà inscrit ?</Link>
      </Stack>
    </Box>
  )
}
