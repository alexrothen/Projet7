import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}
const theme = extendTheme(
  {
    components:
    {
      Button:
        {
          baseStyle:
            {
              _focus:
                    { boxShadow: 'none' }
            }
        }
    },
    config
  })
export default theme
