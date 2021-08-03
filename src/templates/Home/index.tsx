import { ListSection } from 'components/ListSection'
import { TopSection } from 'components/TopSection'

export function Home() {
  return (
    <main className="h-screen w-screen flex flex-col mx-auto">
      <TopSection />
      <ListSection />
    </main>
  )
}
