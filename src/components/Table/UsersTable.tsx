import { mdiEye, mdiTrashCan } from '@mdi/js'
import React, { useState } from 'react'
import { useSampleUsers } from '../../hooks/sampleData'
import { Client, User } from '../../interfaces'
import Button from '../Button'
import Buttons from '../Buttons'
import CardBoxModal from '../CardBox/Modal'
import UserAvatar from '../UserAvatar'

type Props = {
  users: User[]
}
const UsersTable = ({ users }: Props) => {
  console.log('users in table', users)
  const perPage = 5

  const [currentPage, setCurrentPage] = useState(0)

  const usersPaginated =
    users && users.length ? users.slice(perPage * currentPage, perPage * (currentPage + 1)) : []

  const numPages = users.length / perPage

  const pagesList = []

  for (let i = 0; i < numPages; i++) {
    pagesList.push(i)
  }

  const [isModalInfoActive, setIsModalInfoActive] = useState(false)
  const [isModalTrashActive, setIsModalTrashActive] = useState(false)

  const handleModalAction = () => {
    setIsModalInfoActive(false)
    setIsModalTrashActive(false)
  }

  return (
    <>
      <CardBoxModal
        title="Sample modal"
        buttonColor="info"
        buttonLabel="Done"
        isActive={isModalInfoActive}
        onConfirm={handleModalAction}
        onCancel={handleModalAction}
      >
        <p>
          Lorem ipsum dolor sit amet <b>adipiscing elit</b>
        </p>
        <p>This is sample modal</p>
      </CardBoxModal>

      {/* <CardBoxModal
        title="Please confirm"
        buttonColor="danger"
        buttonLabel="Confirm"
        isActive={isModalTrashActive}
        onConfirm={handleModalAction}
        onCancel={handleModalAction}
      >
        <p>
          Lorem ipsum dolor sit amet <b>adipiscing elit</b>
        </p>
        <p>This is sample modal</p>
      </CardBoxModal> */}

      <div className="my-5 px-5">
        <div className="relative">
          <label htmlFor="Search" className="sr-only">
            {' '}
            Search{' '}
          </label>

          <input
            type="text"
            id="Search"
            placeholder="Search for youth..."
            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm dark:bg-gray-900 dark:border-gray-800"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            {/* <th /> */}
            <th>Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Portfolio</th>
            <th>Zone</th>
            <th>Date of Birth</th>
            <th>Date Registered</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {usersPaginated.map((user: User) => (
            <tr key={user._id}>
              {/* <td className="border-b-0 lg:w-6 before:hidden">
                <UserAvatar username={user.name} className="w-24 h-24 mx-auto lg:w-6 lg:h-6" />
              </td> */}
              <td data-label="Name">
                {user.firstName}
                {user.lastName}
              </td>
              <td data-label="Email Address">{user.email}</td>
              <td data-label="Phone Number">{user.phoneNumber}</td>
              <td data-label="Portfolio">{user.portfolio}</td>
              <td data-label="Zone">{user.zone}</td>
              <td data-label="Date of Birth">{user.dateOfBirth}</td>

              <td data-label="Created" className="lg:w-1 whitespace-nowrap">
                <small className="text-gray-500 dark:text-slate-400">
                  {(user as any)?.createdAt}
                </small>
              </td>
              <td className="before:hidden lg:w-1 whitespace-nowrap">
                <Buttons type="justify-start lg:justify-end" noWrap>
                  <Button
                    color="info"
                    icon={mdiEye}
                    onClick={() => setIsModalInfoActive(true)}
                    small
                  />
                  {/* <Button
                    color="danger"
                    icon={mdiTrashCan}
                    onClick={() => setIsModalTrashActive(true)}
                    small
                  /> */}
                </Buttons>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-0">
          <Buttons>
            {pagesList.map((page) => (
              <Button
                key={page}
                active={page === currentPage}
                label={page + 1}
                color={page === currentPage ? 'lightDark' : 'whiteDark'}
                small
                onClick={() => setCurrentPage(page)}
              />
            ))}
          </Buttons>
          <small className="mt-6 md:mt-0">
            Page {currentPage + 1} of {numPages}
          </small>
        </div>
      </div>
    </>
  )
}

export default UsersTable
