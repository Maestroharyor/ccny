import { Tabs, TabsProps } from 'antd'
import React from 'react'

const HomeValues = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Our Visions',
      children: <OurVision />,
    },
    {
      key: '2',
      label: 'Our Mission',
      children: <OurMission />,
    },
    {
      key: '3',
      label: 'Our Core Values',
      children: <OurCoreValues />,
    },
  ]

  return (
    <section className="space-y-5 py-20 text-lg" id="values">
      <div>
        <h2 className="text-center text-3xl font-bold text-gray-950">Our Values</h2>
      </div>
      <div className="max-w-[1000px] mx-auto">
        <Tabs defaultActiveKey="1" centered items={items} />
      </div>
    </section>
  )
}

const OurVision = () => (
  <div className="text-center max-w-[500px] mx-auto text-lg">
    Our vision is “making the youth to see his picture in the scripture and becoming it (Peter 2:9;
    Luke 4:17–21).
  </div>
)
const OurMission = () => (
  <div className="text-center max-w-[500px] mx-auto text-lg">
    Our mission is “building a formidable youth that will stand the test of time (1 Peter 1:5); Acts
    20:32; 1 Peter 2:5.
  </div>
)
const OurCoreValues = () => (
  <div className="text-center max-w-[500px] mx-auto text-lg">
    Our core value is to develop our youths spiritually, emotionally, and physically in order to
    enhance maximum functionality in all areas of their lives.
  </div>
)

export default HomeValues
