import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { capitalizeFirstCharacter } from '@/utils'
import { FaCircleNotch } from 'react-icons/fa'
import axios from 'axios'
import { setUser } from '@/stores/mainSlice'
import { message } from 'antd'
import { RootState } from '@/stores/store'
import { useAppSelector } from '@/stores/hooks'
import { useDispatch } from 'react-redux'

const LoginForm = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [loginMode, setLoginMode] = useState('email')
  const [form, setForm] = useState({
    email: '',
    phoneNumber: '',
    password: '',
  })

  const loginModes = ['email', 'password']

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginUser()
  }

  const loginUser = async () => {
    setIsLoading(true)
    const formData: { password: string; email?: string; phoneNumber?: string } = {
      password: form.password,
    }
    if (form.email.length) {
      formData.email = form.email
    }
    if (form.phoneNumber.length) {
      formData.phoneNumber = form.phoneNumber
    }
    try {
      const { data } = await axios.post('/api/auth/login', formData)
      dispatch(setUser(data))
      message.success('Login Successful')
      if (data?.data?.user?.userRole === 'user') {
        router.push('/account')
      } else {
        router.push('/dashboard')
      }
    } catch (error) {
      message.error(
        error?.response?.data?.message ||
          error?.message ||
          error?.response?.message ||
          'An error occured'
      )
    } finally {
      setIsLoading(false)
    }
  }

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
        <h1 className="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">Login</h1>
        <p className="mb-2 text-sm font-normal text-center text-gray-700 md:text-base flex gap-3 items-center justify-center">
          <span>Don&apos;t have an account?</span>

          <Link href="/register" className="text-purple-700 hover:text-purple-900">
            Register
          </Link>
        </p>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <div className="">
              <nav className="flex justify-center gap-6" aria-label="Tabs">
                {loginModes.map((mode) => (
                  <a
                    key={mode}
                    className={`shrink-0 rounded-lg py-2 px-5 text-sm font-medium transition-all duration-300 ease-in-out cursor-pointer border ${
                      loginMode === mode
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white border-gray-500'
                    }`}
                    // aria-current={loginMode === mode ? 'page' : 'step'}
                    onClick={() => setLoginMode(mode)}
                  >
                    {capitalizeFirstCharacter(mode)}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {loginMode === 'email' ? (
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
              <input
                className="form-input"
                type="email"
                placeholder="Ex. james@bond.com"
                inputMode="email"
                name="email"
                required
                onChange={handleChange}
                value={form.email}
              />
            </label>
          ) : (
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">Phone Number</span>
              <input
                className="form-input"
                type="tel"
                placeholder="+2349000000000"
                inputMode="numeric"
                name="phoneNumber"
                required
                onChange={handleChange}
                value={form.phoneNumber}
              />
            </label>
          )}
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">Create a password</span>
            <input
              className="form-input"
              type="password"
              placeholder="••••••••"
              required
              name="password"
              onChange={handleChange}
              value={form.password}
            />
          </label>

          <button
            type="submit"
            className="w-full btn btn-primary btn-lg flex justify-center items-center gap-2"
            disabled={isLoading}
          >
            {isLoading && <FaCircleNotch className="animate-spin" />}
            <span>{isLoading ? 'Logging in' : 'Log in'}</span>
          </button>
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

export default LoginForm
