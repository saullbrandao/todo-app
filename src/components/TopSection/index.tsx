import { Form } from 'components/Form'
import { Header } from 'components/Header'

export function TopSection() {
  return (
    <section className="flex flex-col justify-evenly px-6 bg-mobile-light bg-no-repeat bg-cover h-1/3 ">
      <Header />
      <Form />
    </section>
  )
}
