import React, { useState } from 'react'
import Link from 'next/link'
import { DatePicker, DatePickerProps, message } from 'antd'
import axios from 'axios'
import { FaCircleNotch } from 'react-icons/fa'
import { usePaystackPayment } from 'react-paystack'
import { useRouter } from 'next/router'
import { setUser } from '@/stores/mainSlice'
import { useDispatch } from 'react-redux'
import CardBoxModal from '@/components/CardBox/Modal'

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
    gender: '',
    password: '',
    paymentTransaction: '',
    paymentTransactionReference: '',
  })
  const [hasPaid, setHasPaid] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('Online')
  const [isTransferModalActive, setIsTransferModalActive] = useState(false)

  const paymentOptions = [
    { value: 'Online', label: 'Online' },
    { value: 'Transfer', label: 'Transfer' },
  ]

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value)
  }
  const [reference, setReference] = useState<any>()

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    setForm({
      ...form,
      dateOfBirth: dateString,
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
    setReference(reference)
    registerUser(reference)
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
    if (paymentMethod.toLowerCase() === 'transfer') {
      setIsTransferModalActive(true)
    } else {
      if (hasPaid) {
        registerUser(reference)
      } else {
        initializePayment(onSuccess as () => void, onClose)
      }
    }
  }

  const registerUser = async (passedReference: any) => {
    setIsLoading(true)
    try {
      const { data } = await axios.post('/api/auth/register', {
        ...form,
        paymentMethod,
        amountPaid: amountToPay,
        paymentTransactionReference: passedReference?.reference,
        paymentTransaction: passedReference?.transaction,
      })
      dispatch(setUser(data.data))
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
    <>
      <CardBoxModal
        title="Bank Transfer Details"
        hideCancelButton
        buttonColor="info"
        buttonLabel="Continue"
        isActive={isTransferModalActive}
        onConfirm={() => {
          message.info('Registering with Transfer')
          registerUser(reference)
          setIsTransferModalActive(false)
        }}
        onCancel={() => setIsTransferModalActive(false)}
      >
        <div className="py-10 px-5 space-y-1 ">
          <p className="muted text-base">Transfer to the account details below:</p>
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold leadi tracki text-gray-500">
              <span className="text-gray-900 font-bold">Account Name: </span>
              Christ&apos;s Chosen Church of God Int&apos;l Youth Fellowship
            </h2>
            <p className="flex-1 dark:text-gray-500 text-2xl">
              <span className="text-gray-900 font-bold">Account Number: </span> 3113157009
            </p>
            <p className="flex-1 dark:text-gray-500 text-2xl">
              <span className="text-gray-900 font-bold">Bank Name: </span> FirstBank
            </p>
          </div>
        </div>
      </CardBoxModal>
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
            Register
          </h1>
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
            <label className="block text-sm mb-1" htmlFor="gender">
              Gender
            </label>
            <select
              className="form-select"
              id="gender"
              name="gender"
              placeholder="Select gender"
              onChange={handleChange}
              required
            >
              <option value={''}>Select Gender</option>
              <option value={'male'}>Male</option>
              <option value={'female'}>Female</option>
            </select>

            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">Date of Birth</span>
              <DatePicker onChange={onDateChange} className="w-full" size="large" />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Create a password
              </span>
              <input
                className="form-input"
                type="password"
                placeholder="••••••••"
                required
                name="password"
                onChange={handleChange}
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">Payment Method</span>
              <fieldset className="space-y-4">
                <legend className="sr-only">Payment Method</legend>

                {paymentOptions.map((option) => (
                  <div key={option.value}>
                    <input
                      type="radio"
                      name="paymentOption"
                      value={option.value}
                      id={option.value}
                      className="peer hidden [&:checked_+_label_svg]:block"
                      checked={paymentMethod === option.value}
                      onChange={handlePaymentMethodChange}
                    />

                    <label
                      htmlFor={option.value}
                      className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                    >
                      <div className="flex items-center gap-2">
                        <svg
                          className={`h-5 w-5 text-blue-600 ${
                            paymentMethod === option.value ? '' : 'hidden'
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-gray-700">{option.label}</p>
                      </div>

                      {/* <p className="text-gray-900">{option.price}</p> */}
                    </label>
                  </div>
                ))}
              </fieldset>
            </label>

            <button
              type="submit"
              className="w-full btn btn-primary btn-lg flex justify-center items-center gap-2"
              disabled={isLoading || !paymentMethod}
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
    </>
  )
}

export default RegisterForm
