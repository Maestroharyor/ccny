import { mdiEye, mdiTrashCan } from '@mdi/js'
import React, { useState } from 'react'
import { useSampleUsers } from '../../hooks/sampleData'
import { Client, User } from '../../interfaces'
import Button from '../Button'
import Buttons from '../Buttons'
import CardBoxModal from '../CardBox/Modal'
import UserAvatar from '../UserAvatar'
import moment from 'moment'
import NumberDynamic from '../NumberDynamic'
import { capitalizeFirstCharacter } from '@/utils'

type Props = {
  users: User[]
  userRole: string
}
const UsersTable = ({ users, userRole }: Props) => {
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
        buttonLabel={`Close ${userRole === 'admin' ? 'Admin Details' : 'Youth Info'}`}
        isActive={isModalInfoActive}
        onConfirm={handleModalAction}
        hideCancelButton
        onCancel={handleModalAction}
      >
        <div className="overflow-x-auto overflow-y-auto h-[650px] lg:h-full">
          <table className="min-w-full  bg-white text-sm">
            <tbody className="divide-y divide-gray-300">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">First Name</th>
                <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                  {selectedUser?.firstName}
                </td>
              </tr>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">Last Name</th>
                <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                  {selectedUser?.lastName}
                </td>
              </tr>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">
                  Email Address
                </th>
                <td className="whitespace-nowrap px-4 py-2 text-gray-600">{selectedUser?.email}</td>
              </tr>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">
                  Phone Number
                </th>
                <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                  {selectedUser?.phoneNumber}
                </td>
              </tr>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">Gender</th>
                <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                  {capitalizeFirstCharacter(selectedUser?.gender)}
                </td>
              </tr>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">Zone</th>
                <td className="whitespace-nowrap px-4 py-2 text-gray-600">{selectedUser?.zone}</td>
              </tr>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">Portfolio</th>
                <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                  {selectedUser?.portfolio}
                </td>
              </tr>

              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">Unique Code</th>
                <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                  #{selectedUser?.uniqueCode}
                </td>
              </tr>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">Bank Name</th>
                <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                  {selectedUser?.bankName}
                </td>
              </tr>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">
                  Account Name
                </th>
                <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                  {selectedUser?.accountName}
                </td>
              </tr>
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">
                  Account Number
                </th>
                <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                  {selectedUser?.accountNumber}
                </td>
              </tr>
              {selectedUser?.paymentProofImage && (
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">
                    Proof of Payment
                  </th>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                    <img src={selectedUser?.paymentProofImage} alt="" />
                  </td>
                </tr>
              )}
              {/* {selectedUser.paymentMethod && (
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">
                    Payment Method
                  </th>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                    {capitalizeFirstCharacter(selectedUser?.paymentMethod)}
                  </td>
                </tr>
              )} */}
              {/* {selectedUser && selectedUser?.paymentMethod.toLowerCase() === 'online' && (
                <>
                  {' '}
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">
                      Amount Paid
                    </th>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                      <NumberDynamic value={selectedUser?.amountPaid / 100} prefix={'₦'} />
                    </td>
                  </tr>
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">
                      Payment Transaction Number
                    </th>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                      {selectedUser?.paymentTransaction}
                    </td>
                  </tr>
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 text-gray-900 font-bold">
                      Payment Transaction Reference
                    </th>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                      {selectedUser?.paymentTransactionReference}
                    </td>
                  </tr>
                </>
              )} */}
            </tbody>
          </table>
        </div>
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
      <div className="px-5 overflow-x-auto">
        <table>
          <thead>
            <tr>
              {/* <th /> */}
              <th>Full Name</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Gender</th>
              {/* {userRole === 'user' && <th>Portfolio</th>} */}
              <th>Unique Code</th>
              <th>Zone</th>
              {userRole === 'user' && <th>Date of Birth</th>}
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
                <td data-label="Email Address">{user.email || '-'}</td>
                <td data-label="Phone Number">{user.phoneNumber || '-'}</td>
                <td data-label="Gender">
                  {user.gender ? capitalizeFirstCharacter(user.gender) : '-'}
                </td>
                {/* {userRole === 'user' && <td data-label="Portfolio">{user.portfolio}</td>} */}
                <td data-label="Unique Code">#{user.uniqueCode}</td>
                <td data-label="Zone">{user.zone}</td>
                {userRole === 'user' && (
                  <td data-label="Date of Birth">
                    {moment(user.dateOfBirth).format('D, MMM, YYYY')}
                  </td>
                )}

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
      </div>
    </>
  )
}

export default UsersTable
