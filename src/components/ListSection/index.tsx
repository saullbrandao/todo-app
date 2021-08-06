import { List } from 'components/List'
import { useTodo } from 'hooks/useTodo'

export function ListSection() {
  const { handleFilter, filter } = useTodo()

  return (
    <section className="flex flex-col gap-4 w-full px-6 lg:items-center">
      <List />
      <nav className="flex justify-center gap-6 bg-white dark:bg-dark-blue-800 w-full px-5 py-4 rounded-md shadow-sm text-light-gray-400 lg:w-1/2 xl:w-1/3">
        <button
          className={`font-bold hover:text-light-gray-500 dark:hover:text-white ${
            filter === 'all' && 'text-primary'
          }`}
          onClick={() => handleFilter('all')}
        >
          All
        </button>
        <button
          className={`font-bold hover:text-light-gray-500 dark:hover:text-white ${
            filter === 'active' && 'text-primary'
          }`}
          onClick={() => handleFilter('active')}
        >
          Active
        </button>
        <button
          className={`font-bold hover:text-light-gray-500 dark:hover:text-white ${
            filter === 'completed' && 'text-primary'
          }`}
          onClick={() => handleFilter('completed')}
        >
          Completed
        </button>
      </nav>
    </section>
  )
}
