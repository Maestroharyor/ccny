import React, { ReactNode, useEffect } from 'react'
import AccountHeader from '@/components/partials/account/AccountHeader'
import { RootState } from '@/stores/store'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { message } from 'antd'

type Props = {
  children: ReactNode
}

export default function AccountLayout({ children }: Props) {
  const router = useRouter()
  const user = useSelector((state: RootState) => state.main)
  useEffect(() => {
    if (!user.isLoggedIn) {
      message.info('Please login before continuing')
      router.push('/login')
    }
  }, [])
  return (
    <main>
      <AccountHeader />
      {children}
    </main>
  )
}
