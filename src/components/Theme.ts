import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },
    fonts: {
      heading: "TTCommons, Arial, sans-serif",
      body: "TTCommons, Arial, sans-serif",
    },
    styles: {
      global: {
        "*": {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
        }
      },
    },
  });
  export default theme;