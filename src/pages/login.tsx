import LoginForm from '@/components/partials/auth/LoginForm'
import { getPageTitle } from '@/config'
import Head from 'next/head'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Login To Your Account')}</title>
      </Head>
      <LoginForm />
    </>
  )
}

export default HomePage
