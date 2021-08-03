import { List } from 'components/List'

export function ListSection() {
  return (
    <section className="flex flex-col gap-4 w-full px-6">
      <List />

      <nav className="flex justify-center gap-6 bg-white w-full px-5 py-4 rounded-md shadow-md">
        <a href="#">All</a>
        <a href="#">Active</a>
        <a href="#">Completed</a>
      </nav>
    </section>
  )
}
