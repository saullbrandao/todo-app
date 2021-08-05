import { List } from 'components/List'
import { useTodo } from 'hooks/useTodo'

export function ListSection() {
  const {handleFilter, filter} = useTodo()

  return (
    <section className="flex flex-col gap-4 w-full px-6">
      <List />
      <nav className="flex justify-center gap-6 bg-white w-full px-5 py-4 rounded-md shadow-sm text-light-gray-400">
        <button className={`font-bold  ${filter === 'all' && 'text-primary'}`} onClick={() => handleFilter('all')}>All</button>
        <button className={`font-bold  ${filter === 'active' && 'text-primary'}`} onClick={() => handleFilter('active')}>Active</button>
        <button className={`font-bold  ${filter === 'completed' && 'text-primary'}`} onClick={() => handleFilter('completed')}>Completed</button>
      </nav>
    </section>
  )
}
