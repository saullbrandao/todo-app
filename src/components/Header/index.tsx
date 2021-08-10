import { useTheme } from 'hooks/useTheme'
import Image from 'next/image'

export function Header() {
  const { theme, handleTheme } = useTheme()

  return (
    <header className="flex justify-between items-center lg:w-1/2 xl:w-1/3">
      <h1 className="text-3xl font-bold text-white tracking-wide">T O D O</h1>
      <Image
        onClick={handleTheme}
        className="cursor-pointer"
        src={`${theme === 'light' ? '/icon-moon.svg' : '/icon-sun.svg'}`}
        height={22}
        width={22}
        alt={`${theme === 'light' ? 'moon icon' : 'sun icon'}`}
      />
    </header>
  )
}
