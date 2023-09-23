import RegisterForm from '@/components/partials/auth/RegisterForm'
import { getPageTitle } from '@/config'
import Head from 'next/head'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Register')}</title>
      </Head>
      <RegisterForm />
    </>
  )
}

export default HomePage
