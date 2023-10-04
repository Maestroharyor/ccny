import { RootState } from '@/stores/store'
import { capitalizeFirstCharacter } from '@/utils'
import React from 'react'
import { useSelector } from 'react-redux'

const AccountPage = () => {
  const user = useSelector((state: RootState) => state.main)
  return (
    <main className="flex h-[calc(100vh-150px)] w-screen items-center justify-center bg-gray-100 p-10">
      <div className="mx-auto w-full max-w-[500px] bg-white rounded-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-5 px-5">
          <img src="/images/logo.png" alt="" className="w-[90px]" />
          <div className="text-center">
            <h1 className="text-lg font-bold">CHRIST’S CHOSEN CHURCH OF GOD INT’L</h1>
            <h2 className="text-sm font-bold">NYSC 2023</h2>
            <p className="text-sm font-medium">OCT 26-29</p>
          </div>
          <img src="/images/nysc.png" alt="" className="w-[90px] hidden sm:block" />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 py-8 text-center px-5">
          <div>
            <h4 className="text-sm font-bold">Name</h4>
            <p className="text-base text-gray-500">
              {user.lastName} {user.firstName}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold">Gender</h4>
            <p className="text-base text-gray-500">{user.gender}</p>
          </div>

          {/* <div>
            <h4 className="text-sm font-bold">Station</h4>
            <p className="text-base text-gray-500">Isekhere</p>
          </div> */}

          <div>
            <h4 className="text-sm font-bold">Event Code</h4>
            <p className="text-base text-gray-500">{user.uniqueCode}</p>
          </div>
        </div>
        <div className="py-3 text-lg bg-gray-200 text-center font-bold rounded-b-lg">
          <h4>PARTICIPANT</h4>
        </div>
      </div>
    </main>
  )
}

export default AccountPage
