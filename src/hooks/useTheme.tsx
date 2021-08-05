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
  const [theme, setTheme] = useState<Theme>('light')

  function handleTheme() {
    theme === 'light'
     ? setTheme('dark')
     : setTheme('light')
  }

  useEffect(() => {
    // check if the theme is stored on localStorage
    // if not, check if the user's system preferred color scheme is set to dark
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if(theme === 'light') {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
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