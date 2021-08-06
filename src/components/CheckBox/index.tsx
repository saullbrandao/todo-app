import Image from 'next/image'
import { InputHTMLAttributes } from 'react'
import checkIcon from 'public/icon-check.svg'

export function CheckBox({
  checked,
  id,
  ...restProps
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative w-6 h-6">
      <input
        id={id}
        checked={checked}
        {...restProps}
        type="checkbox"
        className="z-10 w-full h-full appearance-none border border-light-gray-300 dark:border-dark-gray-400 rounded-full checked:bg-gradient-to-br from-gradient-start to-gradient-end"
      />
      <label
        htmlFor={id}
        className={`absolute z-0 top-[-1px] left-[30%]  ${
          !checked && 'hidden'
        }`}
      >
        <Image src={checkIcon} alt="checkbox mark" />
      </label>
    </div>
  )
}
