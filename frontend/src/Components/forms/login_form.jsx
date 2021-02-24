import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import LogoDark from '../../assets/icon-left-font-monochrome-dark.svg'
import LogoLight from '../../assets/icon-left-font-monochrome-grey.svg'
// import { Form, Img } from './form_style.js'
import '../../index.css'
import {
  Box,
  Img,
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
  IconButton,
  useColorModeValue,
  Center
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
  const LogoSwitcher = useColorModeValue(LogoDark, LogoLight)

  const [show, setShow] = useState(false)
  const toggleShow = () => setShow(!show)

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

        <Button
          bg={Color.accent}
          m='auto'
          boxShadow='2xl'
          w='150px'
          disabled={disabled}
          onClick={onClickSubmit}
          isLoading={isLoading}
          type='submit'
          variant='solid'
        >
          CONNEXION
        </Button>

        <Link display='flex' justifyContent='center' size='sm' _hover={{ color: Color.accent }} onClick={onClickToggle}>Pas encore inscrit ?</Link>
      </Stack>
    </Box>
  )
}
