import { Input } from 'components/Input'

export function Form() {
  return (
    <form className="flex w-full h-12 rounded-md bg-white items-center gap-4 px-5 focus-within:ring-1 ring-black">
      <span className="w-6 h-6 rounded-full  border border-light-gray-400 " />
      <Input />
    </form>
  )
}
