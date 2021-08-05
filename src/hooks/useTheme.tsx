import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  handleTheme: () => void
}

type ThemeContextProviderProps = {
  children: ReactNode
}

const ThemeContext = createContext({} as ThemeContextType)



export function ThemeContextProvider(props: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark')

  function handleTheme() {
    theme === 'light'
     ? setTheme('dark')
     : setTheme('light')
  }

  useEffect(() => {
    theme === 'light'
      ? document.documentElement.classList.remove('dark')
      : document.documentElement.classList.add('dark')
  }, [theme])

  return (
    <ThemeContext.Provider value={{theme, handleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const value = useContext(ThemeContext)
  return value
}