import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import ImgLogo from '../../assets/icon-left-font-monochrome-dark.svg'
import { Form, Img } from './form_style.js'
import '../../index.css'
import {
  Input,
  InputRightElement,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
  Text,
  Link,
  Button,
  InputGroup,
  IconButton
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Color } from '../../utils/styles/color'

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
    <Form onSubmit={onSubmit}>
      <Stack spacing='1em' mt='140px' h='210px' display='flex' justifyContent='center'>
        <Img src={ImgLogo} />
        <FormControl
          display='flex'
          id='email'
          flexDirection='column'
          m='auto'
          isInvalid={errors.email}
          alignItems='center'
          isRequired
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
          id='password'
          isRequired
        >
          <FormLabel w='230px' htmlFor='password'>Mot de passe</FormLabel>
          <InputGroup w='250px'>
            <Input
              errorBorderColor={Color.red}
              focusBorderColor={errors.password ? Color.red : Color.accent}
              w='250px'
              htmlFor='password'
              name='password'
              type={show ? 'text' : 'password'}
              placeholder='mot de passe'
              aria-invalid={errors.password ? 'true' : 'false'}
              ref={register()}
            />
            <InputRightElement width='2rem'>
              <IconButton aria-label={ show ? 'Cacher le mot passe' : 'Afficher le mot de passe'} size='sm' onClick={toggleShow} variant='solid' icon={show ? <ViewOffIcon /> : <ViewIcon />} />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.password && <Text color={Color.red}>{errors.password.message}</Text>}
          </FormErrorMessage>
        </FormControl>
      </Stack>
      <Stack mt='50px' h='80px' spacing={3}>

        <Button
          _hover={{ color: Color.bgColorDark, bg: Color.bgGrey }}
          color='whiteAlpha.800' bg={Color.accent}
          border='2px' borderColor={Color.accent} m='auto'
          boxShadow='2xl'
          w='150px'
          disabled={disabled}
          onClick={onClickSubmit}
          isLoading={isLoading}
          type='submit'
        >
          CONNEXION
        </Button>

        <Link display='flex' justifyContent='center' size='sm' _hover={{ color: Color.accent }} onClick={onClickToggle}>Pas encore inscrit ?</Link>
      </Stack>
    </Form>
  )
}
