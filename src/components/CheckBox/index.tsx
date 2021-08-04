import { InputHTMLAttributes } from 'react'

export function CheckBox(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} type="checkbox" className="w-6 h-6" />
}
