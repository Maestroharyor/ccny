import React, { useState } from 'react'
import Link from 'next/link'
import { message } from 'antd'
import axios from 'axios'
import { FaCircleNotch } from 'react-icons/fa'
import { usePaystackPayment } from 'react-paystack'
import { useRouter } from 'next/router'
import { setUser } from '@/stores/mainSlice'
import { useDispatch } from 'react-redux'

const RegisterForm = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const amountToPay = 2000000
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    portfolio: '',
    amountPaid: 0,
    dateOfBirth: '',
    zone: '',
    password: '',
    paymentTransaction: '',
    paymentTransactionReference: '',
  })
  const [hasPaid, setHasPaid] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const config = {
    reference: new Date().getTime().toString(),
    email: form.email,
    amount: amountToPay, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
  }
  const initializePayment = usePaystackPayment(config)

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    message.success('Payment Successful')
    // setTimeout(() => {
    message.loading('Proceeding with your registration')
    // }, 1000)
    setForm((prevValue) => ({
      ...prevValue,
      amountPaid: amountToPay,
    }))
    setHasPaid(true)
    setForm((prevValue) => ({
      ...prevValue,
      paymentTransactionReference: reference.reference,
      paymentTransaction: reference.transaction,
    }))
    registerUser()
  }

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    message.error('Payment Failed')
    setTimeout(() => {
      message.error('Unable to proceeed with your registration')
    }, 1000)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (hasPaid) {
      registerUser()
    } else {
      initializePayment(onSuccess as () => void, onClose)
    }
  }

  const registerUser = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.post('/api/auth/register', form)
      dispatch(setUser(data))
      message.success('Registration Successful')
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
        <h1 className="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">Register</h1>
        <p className="mb-2 text-sm font-normal text-center text-gray-700 md:text-base flex gap-3 items-center justify-center">
          <span>Already have an account?</span>

          <Link href="/login" className="text-purple-700 hover:text-purple-900">
            Login
          </Link>
        </p>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <label className="block flex-1">
              <span className="block mb-1 text-xs font-medium text-gray-700">First Name</span>
              <input
                className="form-input"
                type="text"
                placeholder="John"
                name="firstName"
                required
                onChange={handleChange}
              />
            </label>
            <label className="block flex-1">
              <span className="block mb-1 text-xs font-medium text-gray-700">Last Name</span>
              <input
                className="form-input"
                type="text"
                placeholder="Doe"
                name="lastName"
                required
                onChange={handleChange}
              />
            </label>
          </div>

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
            />
          </label>
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">Phone Number</span>
            <input
              className="form-input"
              type="text"
              placeholder="+234900000000"
              name="phoneNumber"
              required
              onChange={handleChange}
            />
          </label>
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">Zone</span>
            <input
              className="form-input"
              type="text"
              placeholder=""
              name="zone"
              required
              onChange={handleChange}
            />
          </label>
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">Portfolio</span>
            <textarea
              name="portfolio"
              id=""
              cols={30}
              rows={2}
              className="resize-none w-full"
              onChange={handleChange}
            ></textarea>
          </label>
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">Date of Birth</span>
            <input
              className="form-input"
              type="date"
              name="dateOfBirth"
              required
              onChange={handleChange}
            />
          </label>
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">Create a password</span>
            <input
              className="form-input"
              type="password"
              placeholder="••••••••"
              required
              name="password"
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            className="w-full btn btn-primary btn-lg flex justify-center items-center gap-2"
            disabled={isLoading}
          >
            {isLoading && <FaCircleNotch className="animate-spin" />}
            <span>{isLoading ? 'Registering' : 'Register'}</span>
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

export default RegisterForm
