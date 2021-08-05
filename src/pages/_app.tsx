import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { TodoContextProvider } from 'hooks/useTodo'
import { ThemeContextProvider } from 'hooks/useTheme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <TodoContextProvider>
        <Component {...pageProps} />
      </TodoContextProvider>
    </ThemeContextProvider>
  )
}
export default MyApp
