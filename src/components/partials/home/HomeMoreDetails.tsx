import React from 'react'
import { MdCheck, MdFactCheck } from 'react-icons/md'

const HomeMoreDetails = () => {
  const items = [
    'Regional Evangelism Programme',
    'Leadership and Business Summit',
    'Discipleship Training',
    "Capacity and Empowerment programme through skill acquisition and setting up a talent hunt platform for every aspect of the youth's endeavours: gospel music, trade exhibitions, and academic excellence.",
  ]
  return (
    <section className="py-20 px-5 md:px-10 bg-gray-50" id="more-details">
      <div className="max-w-[1000px] mx-auto space-y-5 text-gray-600 text-lg">
        <h2 className="text-center text-3xl font-bold text-gray-950">More Details</h2>
        <p className="text-center max-w-[800px] mx-auto  ">
          The atmosphere of love and unity provided during the numerous capacity-building programmes
          set up by us is needed to provide the synergy needed to pursue the vision and mission of
          our church, Christ’s Chosen Church of God Int’l, amongst all the youth.
        </p>
        <p className="text-center max-w-[800px] mx-auto ">
          We have a well-outlined programme set up to realise this mission. They are:
        </p>

        <div>
          <ul className="list-none grid grid-cols-1 md:grid-cols-3 flex-wrap gap-5">
            {items.map((item, index) => (
              <li
                key={index}
                className={`px-5 py-3 rounded-lg text-base border bg-white flex items-center gap-3  ${
                  index === 3 ? 'col-span-3' : ''
                }`}
              >
                <MdCheck />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center max-w-[800px] mx-auto ">
          We are taking all programmes to every region across the country where we can have a catch
          on the youths and campuses.
        </p>
      </div>
    </section>
  )
}

export default HomeMoreDetails
