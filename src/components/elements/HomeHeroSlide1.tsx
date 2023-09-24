import Image from 'next/image'
import React from 'react'

const HomeHeroSlide1 = () => {
  return (
    <section className=" h-[630px]">
      <div className="container flex flex-col justify-center p-6 mx-auto  pb-20 pt-40 lg:flex-row lg:justify-between max-w-[1000px] ">
        <div className=" flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1
            className="text-3xl font-bold sm:text-5xl leading-[3rem] capitalize"
            style={{ lineHeight: '4rem' }}
          >
            Welcome To Christ&apos;s Chosen Church of God International
          </h1>

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
            src="/images/general_overseer_2.png"
            alt=""
            // className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 translate-y-[50px]"
            className="translate-y-[5px] lg:translate-y-[50px]"
            width={700}
            height={1000}
          />
          <div className="absolute bottom-3 z-10 px-5 py-2 bg-gray-900/90 rounded text-sm text-white text-center space-y-1">
            <p className="font-bold">SNR. APST. DR. D.E.O. Apostle Unuefe Ikhuiwu</p>
            <p className="text-xs">The Elect of GOD/Spiritual Leader</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSlide1
