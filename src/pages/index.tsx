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
        <title>{getPageTitle('Welcome to CCNY')}</title>
      </Head>
      <HomeHero />
      <HomeAbout />
      <HomeValues />
      <HomeMoreDetails />
      <HomeCTA />
    </>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Landing>{page}</Landing>
}

export default HomePage
