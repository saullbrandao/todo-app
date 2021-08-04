import { List } from 'components/List'

export function ListSection() {
  return (
    <section className="flex flex-col gap-4 w-full px-6">
      <List />

      <nav className="flex justify-center gap-6 bg-white w-full px-5 py-4 rounded-md shadow-sm text-light-gray-400 font-bold">
        <a href="#">All</a>
        <a href="#">Active</a>
        <a href="#">Completed</a>
      </nav>

      <footer className="text-center text-light-gray-400 font-bold text-base ">
        Drag and drop to reorder list
      </footer>
    </section>
  )
}
