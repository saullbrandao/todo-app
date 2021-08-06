import { Form } from 'components/Form'
import { Header } from 'components/Header'

export function TopSection() {
  return (
    <section className="flex flex-col justify-evenly lg:items-center px-6 bg-mobile-light xl:bg-desktop-light dark:bg-mobile-dark xl:dark:bg-desktop-dark bg-no-repeat bg-cover min-h-[30%]">
      <Header />
      <Form />
    </section>
  )
}
