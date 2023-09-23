import Footer from '@/components/footers/Footer'
import Header from '@/components/headers/Header'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Landing = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Landing
