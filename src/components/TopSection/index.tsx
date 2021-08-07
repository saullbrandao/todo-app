import { Form } from 'components/Form'
import { Header } from 'components/Header'

export function TopSection() {
  return (
    <section className="flex flex-col justify-evenly min-h-[30%] px-6 bg-mobile-light bg-no-repeat bg-cover dark:bg-mobile-dark lg:items-center xl:bg-desktop-light xl:dark:bg-desktop-dark">
      <Header />
      <Form />
    </section>
  )
}
