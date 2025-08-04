import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import "@/styles/globals.css";
import theme from '../theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ColorModeScript initialColorMode="dark" />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
