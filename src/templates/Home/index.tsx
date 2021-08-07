import { ListSection } from 'components/ListSection'
import { TopSection } from 'components/TopSection'

export function Home() {
  return (
    <main className="flex flex-col h-screen w-screen mx-auto bg-light-gray-100 dark:bg-dark-blue-900">
      <TopSection />
      <ListSection />
    </main>
  )
}
