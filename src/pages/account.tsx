import AccountPage from '@/components/partials/account/AccountPage'
import { getPageTitle } from '@/config'
import AccountLayout from '@/layouts/Account'
import Head from 'next/head'
import React, { ReactElement } from 'react'

const Account = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Account')}</title>
      </Head>
      <AccountPage />
    </>
  )
}

Account.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>
}

export default Account
