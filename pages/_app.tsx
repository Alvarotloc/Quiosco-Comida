import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QuioscoProvider } from '../context/QuioscoProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QuioscoProvider>
      <Component {...pageProps} />
    </QuioscoProvider>
  )
}

export default MyApp
