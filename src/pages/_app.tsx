import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { TodoContextProvider } from 'hooks/useTodo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodoContextProvider>
      <Component {...pageProps} />
    </TodoContextProvider>
  )
}
export default MyApp
