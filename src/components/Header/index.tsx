import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Header() {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'))
  }, [])

  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      window.document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [darkMode])

  return (
    <header className="flex justify-between items-center lg:w-1/2 xl:w-1/3">
      <h1 className="text-3xl font-bold text-white tracking-wide">T O D O</h1>
      <Image
        onClick={() => setDarkMode(!darkMode)}
        className="cursor-pointer"
        src={`${darkMode ? '/icon-sun.svg' : '/icon-moon.svg'}`}
        height={22}
        width={22}
        alt={`${darkMode ? 'sun icon' : 'moon icon'}`}
      />
    </header>
  )
}
