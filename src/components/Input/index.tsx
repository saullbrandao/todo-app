import { InputHTMLAttributes } from 'react'

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      type="text"
      placeholder="Create a new todo..."
      className="flex-1 py-2 outline-none rounded-md text-sm dark:bg-dark-blue-800 dark:text-dark-gray-100"
    />
  )
}
