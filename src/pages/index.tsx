import Head from 'next/head'
import { Home } from 'templates/Home'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <Home />
    </>
  )
}
