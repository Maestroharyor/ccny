import React from 'react'
import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-950">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-1">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <Link href="/" className={`"navbar-logo block w-full  `}>
              <img
                src="/images/logo.png"
                alt="logo"
                className={`transition-all duration-300 ease-in-out w-[60px] `}
              />
            </Link>
          </div>

          <div>
            <a
              href="https://www.facebook.com/CCCOGIYOUTH?mibextid=ZbWKwL"
              target="_blank"
              className="text-white text-2xl"
            >
              <FaFacebook />
            </a>
          </div>

          <p className="sm:mt-4 text-center text-xs sm:text-sm text-gray-200 lg:mt-0 lg:text-right">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
