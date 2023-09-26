import React, { useEffect, useState } from 'react'
import { DatePicker, DatePickerProps, message } from 'antd'
import axios from 'axios'
import { FaCircleNotch } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { setUser } from '@/stores/mainSlice'
import { useDispatch } from 'react-redux'
import { User } from '@/interfaces'
import { capitalizeFirstCharacter } from '@/utils'

type Props = {
  isUserAddLoading: boolean
  setIsUserAddLoading: React.Dispatch<React.SetStateAction<boolean>>
  isAddUserModalActive: boolean
  // closeModal: () => void;
}
const AddAdminUserForm = ({
  isUserAddLoading,
  setIsUserAddLoading,
  isAddUserModalActive,
}: Props) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [hasCreated, setHasCreated] = useState(false)
  const [newUser, setNewUser] = useState<User | null>(null)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    zone: '',
    amountPaid: 0,
    gender: '',
    password: '',
    userRole: 'admin',
  })

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    registerUser()
  }

  const registerUser = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.post('/api/auth/register', form)
      dispatch(setUser(data.data))
      message.success('Admin added Successfully')
      setHasCreated(true)
      setNewUser(data.data.user)
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

  useEffect(() => {
    setNewUser(null)
    setHasCreated(false)
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      zone: '',
      amountPaid: 0,
      gender: '',
      password: '',
      userRole: 'admin',
    })
  }, [isAddUserModalActive])
  return (
    <section>
      {hasCreated ? (
        <div>
          <p className="text-2xl font-bold">Admin Details</p>
          <table className="min-w-full  bg-white text-sm">
            <tbody className="divide-y divide-gray-300">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">First Name</th>
                <td className="whitespace-nowrap px-4 py-2 text-gray-600">{newUser?.firstName}</td>
              </tr>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">Last Name</th>
                <td className="whitespace-nowrap px-4 py-2 text-gray-600">{newUser?.lastName}</td>
              </tr>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">
                  Email Address
                </th>
                <td className="whitespace-nowrap px-4 py-2 text-gray-600">{newUser?.email}</td>
              </tr>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">
                  Phone Number
                </th>
                <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                  {newUser?.phoneNumber}
                </td>
              </tr>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">Gender</th>
                <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                  {capitalizeFirstCharacter(newUser?.gender)}
                </td>
              </tr>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">Zone</th>
                <td className="whitespace-nowrap px-4 py-2 text-gray-600">{newUser?.zone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
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
          <label className="block text-sm mb-1" htmlFor="gender">
            Gender
          </label>
          <select
            className="form-select"
            id="gender"
            name="gender"
            placeholder="Select gender"
            onChange={handleChange}
          >
            <option value={''}>Select Gender</option>
            <option value={'male'}>Male</option>
            <option value={'female'}>Female</option>
          </select>

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
            <span>{isLoading ? 'Adding New Admin' : 'Add Admin'}</span>
          </button>
        </form>
      )}
    </section>
  )
}

export default AddAdminUserForm
