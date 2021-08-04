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
    const id = `${item}${Date.now()}`
    const newItem = {
      value: item,
      id,
      checked: false,
    }
    addItem(newItem)
    setItem('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full h-12 rounded-md bg-white items-center gap-4 px-5 focus-within:ring-1 ring-black"
    >
      <CheckBox readOnly checked={false} />
      <Input onChange={handleItem} value={item} />
    </form>
  )
}
