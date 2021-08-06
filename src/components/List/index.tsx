import { ListItem } from 'components/ListItem'
import { useTodo } from 'hooks/useTodo'

export function List() {
  const { filteredList, clearCompleted } = useTodo()

  return (
    <ul className="flex flex-col items-center bg-white dark:bg-dark-blue-800 rounded-md w-full -mt-8 divide-y divide-[#eae9ed] dark:divide-dark-gray-400 shadow-sm lg:w-1/2 xl:w-1/3">
      {filteredList?.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
      <li className="flex justify-between w-full px-3 py-4 text-light-gray-400 dark:text-dark-gray-400 text-sm">
        <span>{filteredList.length} items left</span>
        <button
          className="hover:text-light-gray-500"
          onClick={() => clearCompleted()}
        >
          Clear Completed
        </button>
      </li>
    </ul>
  )
}
