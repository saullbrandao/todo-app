import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { TodoContextProvider } from 'hooks/useTodo'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodoContextProvider>
      <Script strategy="beforeInteractive" src="/scripts/darkMode.js" />
      <Component {...pageProps} />
    </TodoContextProvider>
  )
}
export default MyApp
