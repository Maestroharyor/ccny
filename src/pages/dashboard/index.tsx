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
import useSWR from 'swr'
import axios from 'axios'
import { User } from '@/interfaces'

const DashboardPage = () => {
  // const { users } = useSampleUsers()
  const [users, setUsers] = useState<User[]>([])

  // const clientsListed = users.slice(0, 4)
  const userFetcher = async (url) => {
    const { data } = await axios.get(url) // Replace with your API endpoint
    return data
  }

  const {
    data: userData,
    isLoading: isUsersLoading,
    error: userError,
  } = useSWR('/api/users?role=user', userFetcher)
  useEffect(() => {
    if (userData) {
      setUsers(userData.data.users)
    }
  }, [userData])

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
          <StatsLoader />
          <StatsLoader />
          <CardBoxWidget
            // trendLabel="12%"
            // trendType="up"
            trendColor="success"
            icon={mdiAccountMultiple}
            iconColor="success"
            number={512}
            label="Youths Registered"
          />
          <CardBoxWidget
            // trendLabel="16%"
            // trendType="down"
            trendColor="danger"
            icon={mdiCash}
            iconColor="info"
            number={7770}
            numberPrefix="₦"
            label="Total Payments"
          />
        </div>

        <>
          {isUsersLoading ? (
            <TableLoader />
          ) : (
            <>
              <SectionTitleLineWithButton icon={mdiAccountMultiple} title="Youths" />

              <CardBox hasTable>
                <UsersTable users={users} />
              </CardBox>
            </>
          )}
        </>
      </SectionMain>
    </>
  )
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default DashboardPage
