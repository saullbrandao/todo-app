import Image from 'next/image'
import MoonIcon from 'public/icon-moon.svg'

export function Header() {
  return (
    <header className="flex justify-between h-6 ">
      <h1 className="text-2xl font-bold text-white tracking-wider">T O D O</h1>
      <Image src="/icon-moon.svg" height={24} width={24} alt="moon icon" />
    </header>
  )
}
