import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Function to handle scrolling and update the state
    function handleScroll() {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // Empty dependency array to run the effect only once

  const menus = [
    {
      title: 'Home',
      link: '#',
    },
    {
      title: 'About',
      link: '#about',
    },
    {
      title: 'Values',
      link: '#values',
    },
    {
      title: 'More Details',
      link: '#more-details',
    },
  ]
  return (
    <div
      className={`"ud-header fixed top-0 left-0 z-40 flex w-full items-center transition-all duration-300 ease-in-out  ${
        scrolled ? 'bg-gray-950' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link href="/" className={`"navbar-logo block w-full ${scrolled ? 'py-2' : 'py-5'} `}>
              <img
                src="/images/logo.png"
                alt="logo"
                className={`transition-all duration-300 ease-in-out  ${
                  scrolled ? 'w-[60px]' : 'w-[80px]'
                }`}
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div className="flex-1">
              <button
                id="navbarToggler"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
              >
                {pathname === '/' && (
                  <ul className="block justify-center items-center lg:flex gap-10">
                    {menus.map((menu) => (
                      <li className="group relative" key={menu.title}>
                        <a
                          href={menu.link}
                          className="ud-menu-scroll  flex py-2 text-md text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                        >
                          {menu.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <Link
                href="/login"
                className="loginBtn py-3 px-7 text-base font-medium text-white hover:opacity-70"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="signUpBtn rounded-lg  py-3 px-6 text-base font-medium  duration-300 ease-in-out bg-yellow-500 text-gray-900 hover:bg-yellow-700"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
