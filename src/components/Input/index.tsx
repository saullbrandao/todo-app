import { InputHTMLAttributes } from 'react'

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      type="text"
      placeholder="Create a new todo..."
      className="flex-1 rounded-md text-sm py-2 outline-none dark:bg-dark-blue-800"
    />
  )
}
