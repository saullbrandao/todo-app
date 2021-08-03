import Image from 'next/image'

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']

export function List() {
  return (
    <ul className="flex flex-col items-center bg-white rounded-md w-full -mt-8 divide-y divide-light-gray-300 shadow-md">
      {items.map(item => (
        <li
          className="flex justify-between items-center w-full px-5 py-4 "
          key={item}
        >
          <div className="flex gap-4">
            <span className="w-6 h-6 rounded-full border border-light-gray-400 " />
            {item}
          </div>
          <Image
            src="/icon-cross.svg"
            width={18}
            height={18}
            alt="Cross sign"
          />
        </li>
      ))}
      <div className="flex justify-between w-full px-3 py-4">
        <span>{items.length} items left</span>
        <span>Clear Completed</span>
      </div>
    </ul>
  )
}
