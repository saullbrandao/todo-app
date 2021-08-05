import { ListItem } from 'components/ListItem'
import { useTodo } from 'hooks/useTodo'

export function List() {
  const { filteredList, clearCompleted } = useTodo()

  return (
    <ul className="flex flex-col items-center bg-white rounded-md w-full -mt-8 divide-y-2 divide-[#eae9ed] shadow-sm">
      {filteredList?.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
      <li className="flex justify-between w-full px-3 py-4 text-light-gray-400 text-sm">
        <span>{filteredList.length} items left</span>
        <button onClick={() => clearCompleted()}>Clear Completed</button>
      </li>
    </ul>
  )
}
