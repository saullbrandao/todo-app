import { Form } from 'components/Form'
import { Header } from 'components/Header'

export function TopSection() {
  return (
    <section className="flex flex-col justify-evenly px-6 bg-mobile-light dark:bg-mobile-dark bg-no-repeat bg-cover min-h-[30%]">
      <Header />
      <Form />
    </section>
  )
}
