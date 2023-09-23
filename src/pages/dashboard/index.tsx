import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiCash,
  mdiChartTimelineVariant,
  mdiMonitorCellphone,
} from '@mdi/js'
import Head from 'next/head'
import React, { useState } from 'react'
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

const DashboardPage = () => {
  const { users } = useSampleUsers()
  const { transactions } = useSampleTransactions()

  const clientsListed = users.slice(0, 4)

  const [chartData, setChartData] = useState(sampleChartData())

  const fillChartData = (e: React.MouseEvent) => {
    e.preventDefault()

    setChartData(sampleChartData())
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

        <SectionTitleLineWithButton icon={mdiAccountMultiple} title="Youths" />
        <CardBox hasTable>
          <UsersTable />
        </CardBox>
      </SectionMain>
    </>
  )
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default DashboardPage
