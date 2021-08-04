import Image from 'next/image'
import { CheckBox } from 'components/CheckBox'
import { useTodo } from 'hooks/useTodo'
import { ListItemProps } from './types'

export function ListItem({ item }: ListItemProps) {
  const { removeItem } = useTodo()

  return (
    <li className="flex justify-between items-center gap-4 w-full px-5 py-4 ">
      <div className="flex flex-1 gap-4 items-center">
        <CheckBox id={item.id} />
        <label className="flex-1" htmlFor={item.id}>
          {item.value}
        </label>
      </div>
      <Image
        src="/icon-cross.svg"
        width={18}
        height={18}
        alt="Cross sign"
        onClick={() => removeItem(item.id)}
      />
    </li>
  )
}
