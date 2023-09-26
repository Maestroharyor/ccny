import Image from 'next/image'
import React from 'react'
import { MdInfo } from 'react-icons/md'

const HomeHeroSlide3 = () => {
  return (
    <section className=" ">
      <div className="container flex flex-col justify-center p-6 mx-auto lg:px-20  pb-20 pt-40 md:flex-row md:justify-between max-w-[1000px] ">
        <div className=" flex flex-col justify-center p-6 text-center rounded-sm md:max-w-md xl:max-w-lg md:text-left gap-3">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl  capitalize leading-[3.5rem] headingslide1">
            Gospel Music Talent Hunt
          </h1>
          <div>
            <p className="mx-auto mb-10 max-w-[600px] text-xs text-[#e4e4e4]  sm:leading-relaxed  md:leading-relaxed flex justify-center md:justify-start items-center gap-2">
              <MdInfo />
              <span>Registration Closed</span>
            </p>
          </div>

          {/* <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start">
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
        <div className="flex-1 flex items-center justify-center p-6 mt-8 md:mt-0 h-72 sm:h-80 md:h-96 xl:h-112 2xl:h-128">
          <Image
            src="/images/talent-hunt.jpeg"
            alt=""
            // className="object-contain h-72 sm:h-80 md:h-96 xl:h-112 2xl:h-128 translate-y-[50px]"
            className="translate-y-[-30px] sm:w-[400px] md:w-full md:translate-y-[65px]"
            width={700}
            height={1000}
          />
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSlide3
