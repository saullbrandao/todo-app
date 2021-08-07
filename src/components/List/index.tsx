import { ListItem } from 'components/ListItem'
import { useTodo } from 'hooks/useTodo'

export function List() {
  const { filteredList, clearCompleted } = useTodo()

  return (
    <ul className="flex flex-col items-center w-full -mt-8 shadow-sm rounded-md divide-y divide-[#eae9ed] bg-white dark:divide-dark-gray-400 dark:bg-dark-blue-800 lg:w-1/2 xl:w-1/3 ">
      {filteredList?.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
      <li className="flex justify-between w-full px-3 py-4 text-sm text-light-gray-400 dark:text-dark-gray-400">
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
