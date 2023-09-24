import { RootState } from '@/stores/store'
import React from 'react'
import { useSelector } from 'react-redux'

const AccountPage = () => {
  const user = useSelector((state: RootState) => state.main)
  console.log(user)
  return (
    <main className="flex h-[calc(100vh-150px)] w-screen items-center justify-center bg-gray-100 p-10">
      <div className="relative flex flex-col sm:flex-row min-h-[300px] w-full max-w-[700px] rounded bg-gray-300 px-5 py-5 shadow">
        <div className="absolute left-[160px] top-[10px] h-[20px] w-[20px] rounded-full bg-gray-300 hidden sm:block"></div>
        <div className="absolute bottom-[10px] left-[160px] h-[20px] w-[20px] rounded-full bg-gray-300 hidden sm:block"></div>

        <div className="absolute left-[10px] top-[155px] sm:left-[160px] sm:top-[10px] h-[20px] w-[20px] rounded-full bg-gray-300 sm:hidden"></div>
        <div className="absolute right-[10px] top-[155px] sm:top-0 sm:bottom-[10px] sm:left-[160px] h-[20px] w-[20px] rounded-full bg-gray-300 sm:hidden"></div>

        <div className="flex flex-col items-center justify-center bg-white p-10">
          <p className="text-3xl font-bold text-gray-800">OCT</p>
          <p className="text-xl font-bold text-gray-400">26 - 29</p>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center text-center sm:text-left sm:items-start gap-3 border-t-2 sm:border-t-0 sm:border-l-2 border-dashed bg-white p-10">
          <div>
            <p className="text-base font-medium text-gray-500">Name</p>
            <p className="text-xl font-bold">
              {user.firstName} {user.lastName}
            </p>
          </div>
          <div>
            <p className="text-base font-medium text-gray-500">Gender</p>
            <p className="text-xl font-bold">{user.gender}</p>
          </div>
          <div>
            <p className="text-base font-medium text-gray-500">Event Code</p>
            <p className="text-xl font-bold">#{user.uniqueCode}</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AccountPage
