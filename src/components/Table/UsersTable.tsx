import { mdiEye, mdiTrashCan } from '@mdi/js'
import React, { useState } from 'react'
import { useSampleUsers } from '../../hooks/sampleData'
import { Client, User } from '../../interfaces'
import Button from '../Button'
import Buttons from '../Buttons'
import CardBoxModal from '../CardBox/Modal'
import UserAvatar from '../UserAvatar'
import moment from 'moment'

type Props = {
  users: User[]
}
const UsersTable = ({ users }: Props) => {
  const perPage = 10

  const [currentPage, setCurrentPage] = useState(0)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const usersPaginated =
    users && users.length ? users.slice(perPage * currentPage, perPage * (currentPage + 1)) : []

  const numPages = Math.floor(users.length / perPage) || 1

  const pagesList = []

  for (let i = 0; i < numPages; i++) {
    pagesList.push(i)
  }

  const [isModalInfoActive, setIsModalInfoActive] = useState(false)
  const [isModalTrashActive, setIsModalTrashActive] = useState(false)

  const handleModalAction = () => {
    setIsModalInfoActive(false)
    setIsModalTrashActive(false)
    setSelectedUser(null)
  }

  return (
    <>
      <CardBoxModal
        title={`${selectedUser?.firstName} ${selectedUser?.lastName}`}
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

      <table>
        <thead>
          <tr>
            {/* <th /> */}
            <th>Full Name</th>
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
                {user.firstName} {user.lastName}
              </td>
              <td data-label="Email Address">{user.email}</td>
              <td data-label="Phone Number">{user.phoneNumber}</td>
              <td data-label="Portfolio">{user.portfolio}</td>
              <td data-label="Zone">{user.zone}</td>
              <td data-label="Date of Birth">{moment(user.dateOfBirth).format('D, MMM, YYYY')}</td>

              <td data-label="Created" className="lg:w-1 whitespace-nowrap">
                <small className="text-gray-500 dark:text-slate-400">
                  {moment((user as any)?.createdAt).format('D, MMM, YYYY')}
                </small>
              </td>
              <td className="before:hidden lg:w-1 whitespace-nowrap">
                <Buttons type="justify-start lg:justify-end" noWrap>
                  <Button
                    color="info"
                    icon={mdiEye}
                    onClick={() => {
                      setSelectedUser(user)
                      setIsModalInfoActive(true)
                    }}
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
