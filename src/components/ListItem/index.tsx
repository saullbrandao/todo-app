import { CheckBox } from 'components/CheckBox'
import Image from 'next/image'

export function ListItem({ key = '', item = '' }) {
  return (
    <li
      className="flex justify-between items-center gap-4 w-full px-5 py-4 "
      key={key}
    >
      <div className="flex flex-1 gap-4 items-center">
        <CheckBox id={key} />
        <label className="flex-1" htmlFor={key}>
          {item}
        </label>
      </div>
      <Image src="/icon-cross.svg" width={18} height={18} alt="Cross sign" />
    </li>
  )
}
