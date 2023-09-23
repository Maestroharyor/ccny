import AccountHeader from '@/components/partials/account/AccountHeader'
import AccountPage from '@/components/partials/account/AccountPage'
import { getPageTitle } from '@/config'
import Head from 'next/head'
import React from 'react'

const Account = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Account')}</title>
      </Head>
      <AccountHeader />
      <AccountPage />
    </>
  )
}

export default Account
