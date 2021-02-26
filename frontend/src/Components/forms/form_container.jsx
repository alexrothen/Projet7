import React from 'react'
import LogoDark from '../../assets/icon-left-font-monochrome-dark.svg'
import LogoLight from '../../assets/icon-left-font-monochrome-grey.svg'
import '../../index.css'
import {
  Box,
  Img,
  useColorModeValue,
  Center

} from '@chakra-ui/react'

export const FormContainer = ({ onSubmit, children }) => {
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
      {children}
    </Box>
  )
}
