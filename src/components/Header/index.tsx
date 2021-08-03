import Image from 'next/image'

export function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-3xl font-bold text-white tracking-wide">T O D O</h1>
      <Image src="/icon-moon.svg" height={22} width={22} alt="moon icon" />
    </header>
  )
}
