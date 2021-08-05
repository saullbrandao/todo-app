import { List } from 'components/List'
import { useTodo } from 'hooks/useTodo'

export function ListSection() {
  const {handleFilter} = useTodo()

  return (
    <section className="flex flex-col gap-4 w-full px-6">
      <List />
      <nav className="flex justify-center gap-6 bg-white w-full px-5 py-4 rounded-md shadow-sm text-light-gray-400 font-bold">
        <button onClick={() => handleFilter('all')}>All</button>
        <button onClick={() => handleFilter('active')}>Active</button>
        <button onClick={() => handleFilter('completed')}>Completed</button>
      </nav>
    </section>
  )
}
