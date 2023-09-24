import Image from 'next/image'
import React from 'react'
import { MdInfo } from 'react-icons/md'

const HomeHeroSlide3 = () => {
  return (
    <section className=" ">
      <div className="container flex flex-col justify-center p-6 mx-auto  pb-20 pt-40 lg:flex-row lg:justify-between max-w-[1000px] ">
        <div className=" flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left gap-3">
          <h1
            className="text-2xl font-bold sm:text-5xl leading-[3rem] capitalize"
            style={{ lineHeight: '4rem' }}
          >
            Gospel Music Talent Hunt
          </h1>
          <div>
            <p className="mx-auto mb-10 max-w-[600px] text-xs text-[#e4e4e4]  sm:leading-relaxed  md:leading-relaxed flex justify-center lg:justify-start items-center gap-2">
              <MdInfo />
              <span>Registration Closed</span>
            </p>
          </div>

          {/* <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Suspendisse
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
              >
                Malesuada
              </a>
            </div> */}
        </div>
        <div className="flex-1 flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src="/images/talent-hunt.jpeg"
            alt=""
            // className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 translate-y-[50px]"
            className="lg:translate-y-[50px]"
            width={700}
            height={1000}
          />
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSlide3
