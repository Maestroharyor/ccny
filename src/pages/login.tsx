import LoginForm from '@/components/partials/auth/LoginForm'
import HomeAbout from '@/components/partials/home/HomeAbout'
import HomeCTA from '@/components/partials/home/HomeCTA'
import HomeHero from '@/components/partials/home/HomeHero'
import HomeMoreDetails from '@/components/partials/home/HomeMoreDetails'
import HomeValues from '@/components/partials/home/HomeValues'
import { getPageTitle } from '@/config'
import Landing from '@/layouts/Landing'
import Head from 'next/head'
import React, { ReactElement } from 'react'

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
