import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiCash,
  mdiChartTimelineVariant,
  mdiMonitorCellphone,
} from '@mdi/js'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import LayoutAuthenticated from '@/layouts/Authenticated'
import SectionMain from '@/components/Section/Main'
import SectionTitleLineWithButton from '@/components/Section/TitleLineWithButton'
import CardBoxWidget from '@/components/CardBox/Widget'
import { useSampleUsers, useSampleTransactions } from '../../hooks/sampleData'
import CardBox from '@/components/CardBox'
import { sampleChartData } from '@/components/ChartLineSample/config'
import NotificationBar from '@/components/NotificationBar'
import UsersTable from '@/components/Table/UsersTable'
import { getPageTitle } from '@/config'
import StatsLoader from '@/components/skeletons/StatsLoader'
import TableLoader from '@/components/skeletons/TableLoader'
import useSWR, { mutate } from 'swr'
import axios from 'axios'
import { User } from '@/interfaces'

const DashboardPage = () => {
  // const { users } = useSampleUsers()
  const [users, setUsers] = useState<User[]>([])
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAmountPaid: 0,
  })
  const [searchText, setSearchText] = useState('')
  const [userRole, setUserRole] = useState('user') // Default value

  // const clientsListed = users.slice(0, 4)
  const fetcher = async (url) => {
    const { data } = await axios.get(url) // Replace with your API endpoint
    return data
  }

  const {
    data: userData,
    isLoading: isUsersLoading,
    error: userError,
  } = useSWR(`/api/users?role=${userRole}&per_page=30&search=${searchText}`, fetcher)
  useEffect(() => {
    if (userData) {
      setUsers(userData.data.users)
    }
  }, [userData])

  const {
    data: statsData,
    isLoading: isStatsLoading,
    error: statsError,
  } = useSWR('/api/dashboard', fetcher)
  useEffect(() => {
    if (statsData) {
      setStats(statsData.data)
    }
  }, [statsData])

  // Fetch data when searchText or userRole changes
  useEffect(() => {
    // Ensure searchText and userRole are not empty before triggering the fetch
    if (searchText.trim() !== '' && userRole.trim() !== '') {
      // Trigger the data fetch with the updated searchText and userRole
      // This will cause SWR to re-fetch the data with the new query parameters
      mutate(`/api/users?role=${userRole}&per_page=30&search=${searchText}`)
    }
  }, [searchText, userRole])

  // Handle user input to update searchText
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  // Handle user input to update userRole
  const handleUserRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserRole(event.target.value)
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Dashboard')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title="Overview"
          main
        ></SectionTitleLineWithButton>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
          {isStatsLoading ? (
            <>
              {' '}
              <StatsLoader />
              <StatsLoader />
            </>
          ) : (
            <>
              <CardBoxWidget
                // trendLabel="12%"
                // trendType="up"
                trendColor="success"
                icon={mdiAccountMultiple}
                iconColor="success"
                number={stats.totalUsers}
                label="Youths Registered"
              />
              <CardBoxWidget
                // trendLabel="16%"
                // trendType="down"
                trendColor="danger"
                icon={mdiCash}
                iconColor="info"
                number={stats.totalAmountPaid / 100}
                numberPrefix="₦"
                label="Total Payments"
              />
            </>
          )}
        </div>

        <>
          <SectionTitleLineWithButton icon={mdiAccountMultiple} title="Youths" />

          <CardBox hasTable>
            <div className="grid grid-cols-1 md:grid-cols-12 items-center px-5 gap-2 sm:gap-5 py-10">
              <div className="my-5 md:col-span-8">
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
                    value={searchText}
                    onChange={handleSearchInputChange}
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
              <div className="md:col-span-4">
                <select
                  name="HeadlineAct"
                  id="HeadlineAct"
                  className="w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                  value={userRole}
                  onChange={handleUserRoleChange}
                >
                  <option value="">Filter by Role</option>
                  <option value="user">Youths</option>
                  <option value="admin">Admins</option>
                </select>
              </div>
            </div>
            {isUsersLoading ? <TableLoader /> : <UsersTable users={users} />}
          </CardBox>
        </>
      </SectionMain>
    </>
  )
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default DashboardPage
