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
        className="w-full h-full z-10 border border-light-gray-300 rounded-full checked:bg-gradient-to-br from-gradient-start to-gradient-end appearance-none cursor-pointer dark:border-dark-gray-400"
      />
      <label
        htmlFor={id}
        className={`absolute z-0 top-[-1px] left-[30%] cursor-pointer ${
          !checked && 'hidden'
        }`}
      >
        <Image src={checkIcon} alt="checkbox mark" />
      </label>
    </div>
  )
}
