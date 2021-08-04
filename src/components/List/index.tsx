import { ListItem } from 'components/ListItem'

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']

export function List() {
  return (
    <ul className="flex flex-col items-center bg-white rounded-md w-full -mt-8 divide-y-2 divide-[#eae9ed] shadow-sm">
      {items.map(item => (
        <ListItem key={item} item={item} />
      ))}
      <li className="flex justify-between w-full px-3 py-4 text-light-gray-400 text-sm">
        <span>{items.length} items left</span>
        <span>Clear Completed</span>
      </li>
    </ul>
  )
}
