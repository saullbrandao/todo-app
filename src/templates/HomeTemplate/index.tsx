import { ListSection } from 'components/ListSection'
import { TopSection } from 'components/TopSection'
import Head from 'next/head'

export function HomeTemplate() {
  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <main className="flex flex-col h-screen w-screen mx-auto bg-light-gray-100 dark:bg-dark-blue-900">
        <TopSection />
        <ListSection />
      </main>
    </>
  )
}
