import { CheckBox } from 'components/CheckBox'
import { Input } from 'components/Input'
import { useTodo } from 'hooks/useTodo'
import { FormEvent, SyntheticEvent, useState } from 'react'

export function Form() {
  const [item, setItem] = useState('')
  const { addItem } = useTodo()

  function handleItem(event: FormEvent<HTMLInputElement>) {
    setItem(event.currentTarget.value)
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()
    if (item.trim()) {
      const id = `${item}${Date.now()}`
      const newItem = {
        value: item,
        id,
        checked: false,
      }
      addItem(newItem)
      setItem('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full h-12 items-center gap-4 px-5 rounded-md bg-white focus-within:ring-1 ring-black dark:bg-dark-blue-800 lg:w-1/2 xl:w-1/3 "
    >
      <CheckBox readOnly checked={false} />
      <Input onChange={handleItem} value={item} />
    </form>
  )
}
