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

const ResetPasswordForm = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [email, setEmail] = useState('')
  const [form, setForm] = useState({
    code: '',
    password: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSendCodeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    requestResetCode()
  }

  const passwordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    resetPasswordWithCode()
  }

  const requestResetCode = async () => {
    setIsLoading(true)

    try {
      const { data } = await axios.post('/api/auth/reset-password', { email })
      console.log(data)
      message.success('Reset Code Sent')
      setIsCodeSent(true)
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

  const resetPasswordWithCode = async () => {
    setIsLoading(true)

    try {
      const { data } = await axios.post('/api/auth/reset-password-confirm', { ...form, email })
      console.log(data)
      message.success('Password Reset Successfully')
      router.push('/login')
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
        <h1 className="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">
          Reset Password
        </h1>
        <p className="mb-2 text-sm font-normal text-center text-gray-700 md:text-base flex gap-3 items-center justify-center">
          <span>Don&apos;t have an account?</span>

          <Link href="/register" className="text-purple-700 hover:text-purple-900">
            Register
          </Link>
        </p>
        {isCodeSent ? (
          <form className="mt-8 space-y-4" onSubmit={passwordReset}>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">Reset Code</span>
              <input
                className="form-input"
                type="text"
                name="code"
                required
                onChange={handleChange}
                value={form.code}
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">New Password</span>
              <input
                className="form-input"
                type="password"
                name="password"
                required
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
              <span>{isLoading ? 'Resetting' : 'Reset Password'}</span>
            </button>
          </form>
        ) : (
          <form className="mt-8 space-y-4" onSubmit={handleSendCodeSubmit}>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
              <input
                className="form-input"
                type="email"
                placeholder="Ex. james@bond.com"
                inputMode="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>

            <button
              type="submit"
              className="w-full btn btn-primary btn-lg flex justify-center items-center gap-2"
              disabled={isLoading}
            >
              {isLoading && <FaCircleNotch className="animate-spin" />}
              <span>{isLoading ? 'Resetting' : 'Reset Password'}</span>
            </button>
          </form>
        )}

        <p className="my-5 text-xs font-medium text-center text-gray-700">
          Remembered password?{' '}
          <Link href="/login" className="text-purple-700 hover:text-purple-900">
            Back to Login
          </Link>
          .
        </p>
      </div>
    </section>
  )
}

export default ResetPasswordForm
