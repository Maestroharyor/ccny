import React from 'react'
import Link from 'next/link'

const RegisterForm = () => {
  return (
    <section className="px-4 pb-24 mx-auto  bg-gray-100 min-h-screen">
      <header className="flex items-center justify-center py-5 mb-5 border-b border-gray-200">
        <div className="w-full flex items-center justify-center">
          <Link href="/" className={`"navbar-logo block w-fit `}>
            <img
              src="/images/logo.png"
              alt="logo"
              className={`transition-all duration-300 ease-in-out  w-[60px]`}
            />
          </Link>
        </div>
      </header>
      <div className="w-full py-6 mx-auto md:w-3/5 lg:w-2/5">
        <h1 className="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">Register</h1>
        <p className="mb-2 text-sm font-normal text-center text-gray-700 md:text-base flex gap-3 items-center justify-center">
          <span>Already have an account?</span>

          <Link href="/login" className="text-purple-700 hover:text-purple-900">
            Login
          </Link>
        </p>
        <form className="mt-8 space-y-4">
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">Name</span>
            <input className="form-input" type="text" placeholder="Your full name" required />
          </label>
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
            <input
              className="form-input"
              type="email"
              placeholder="Ex. james@bond.com"
              inputMode="email"
              required
            />
          </label>
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">Create a password</span>
            <input className="form-input" type="password" placeholder="••••••••" required />
          </label>
          <input type="submit" className="w-full btn btn-primary btn-lg" value="Sign Up" />
        </form>

        {/* <p className="my-5 text-xs font-medium text-center text-gray-700">
          By clicking "Sign Up" you agree to our
          <a href="#" className="text-purple-700 hover:text-purple-900">
            Terms of Service
          </a>
          and
          <a href="#" className="text-purple-700 hover:text-purple-900">
            Privacy Policy
          </a>
          .
        </p> */}
      </div>
    </section>
  )
}

export default RegisterForm
