import React from 'react'

const HomeAbout = () => {
  return (
    <section className="py-20 px-5 md:px-10 bg-gray-100" id="about">
      <div className="max-w-[1000px] mx-auto space-y-5 text-gray-600 text-lg">
        <h2 className="text-center text-3xl font-bold text-gray-950">About Us</h2>
        <p className="text-center max-w-[800px] mx-auto  ">
          <span className="font-bold">
            {' '}
            Christ's Chosen Church of God Int'l National Youth Movement
          </span>{' '}
          is the youth arm of <span className="font-bold">Christ's Chosen Church of God Int'l</span>
          . The Church, Christ's Chosen Church of God Int'l, is one big family, a Pentecostal bible
          believing, bible teaching church founded on the principle of holiness and purity wholly
          committed to the propagation of the gospel of repentance, baptism by immersion, and the
          power to witness for Christ by teaching the world the word to prepare them to meet their
          creator.
        </p>
        <p className="text-center max-w-[800px] mx-auto ">
          The mission of the church is to communicate the full gospel of Jesus Christ (Matthew
          28:19–20) through the power of the Holy Spirit (Acts 2:1-6, 13–18). We achieve this
          through:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-8 gap-10 text-base">
          <div className=" px-5 py-3 rounded-lg text-center bg-blue-500 text-white shadow flex justify-center items-center">
            <span>Evangelism</span>
          </div>
          <div className=" px-5 py-3 rounded-lg text-center bg-purple-500 text-white shadow flex justify-center items-center">
            <span>Church Planting</span>
          </div>
          <div className=" px-5 py-3 rounded-lg text-center bg-gray-500 text-white shadow flex justify-center items-center">
            <span>Discipleship Training programmes</span>
          </div>
          <div className=" px-5 py-3 rounded-lg text-center bg-green-500 text-white shadow flex justify-center items-center">
            <span>Praying</span>
          </div>
        </div>

        <p className="text-center max-w-[800px] mx-auto ">
          The National Youth Movement of the Church is saddled with the responsibility to train our
          teeming youths with the sole aim of learning, unlearning, and relearning the tenets of the
          gospel of the kingdom of our God as established by our Lord Jesus Christ through the word
          of God and the power of the Holy Spirit.
        </p>
      </div>
    </section>
  )
}

export default HomeAbout
