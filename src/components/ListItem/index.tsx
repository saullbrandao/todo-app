import Image from 'next/image'
import { CheckBox } from 'components/CheckBox'
import { useTodo } from 'hooks/useTodo'
import { ListItemProps } from './types'
import { CrossIcon } from 'components/CrossIcon'

export function ListItem({ item }: ListItemProps) {
  const { removeItem, handleCheck } = useTodo()

  return (
    <li className="flex justify-between items-center w-full gap-4  px-5  ">
      <div className="flex flex-1 items-center gap-4">
        <CheckBox
          id={item.id}
          checked={item.checked}
          onChange={() => handleCheck(item.id)}
        />
        <label
          className={`flex-1 py-4 text-sm text-dark-gray-500 cursor-pointer dark:text-dark-gray-100 ${
            item.checked &&
            'line-through text-dark-gray-300 dark:text-dark-gray-500 '
          }`}
          htmlFor={item.id}
        >
          {item.value}
        </label>
      </div>
      <CrossIcon
        className="fill-current text-light-gray-500 hover:text-light-gray-400 cursor-pointer"
        height={18}
        width={18}
        onClick={() => removeItem(item.id)}
      />
    </li>
  )
}
