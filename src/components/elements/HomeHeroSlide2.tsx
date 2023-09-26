import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeHeroSlide2 = () => {
  return (
    // <section className="relative overflow-hidden bg-transparent   sm:py-12 md:pb-20 md:pt-40  max-w-[1000px]  mx-auto  flex items-center justify-center h-[630px] ">
    //   <div className="">
    //     <div className="-mx-4 flex flex-wrap items-center">
    //       <div className="w-full px-4">
    //         <div className="hero-content wow fadeInUp mx-auto text-center" data-wow-delay=".2s">
    //           <h1 className="mb-8 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug">
    //             Welcome To National Youth & Students Convention
    //           </h1>
    //           <p className="mx-auto mb-10 max-w-[600px] text-base text-[#e4e4e4] sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
    //             Don&apos;t miss out...
    //           </p>

    //           <Link
    //             href="/register"
    //             className="px-5 py-3 rounded border-white border flex items-center gap-3 w-fit mx-auto hover:border-yellow-500 transition-all duration-300 ease-in-out hover:text-yellow-500"
    //           >
    //             <span>Register Now</span>

    //             <span className="pl-2">
    //               <svg width="20" height="8" viewBox="0 0 20 8" className="fill-current">
    //                 <path d="M19.2188 2.90632L17.0625 0.343819C16.875 0.125069 16.5312 0.0938193 16.2812 0.281319C16.0625 0.468819 16.0312 0.812569 16.2188 1.06257L18.25 3.46882H0.9375C0.625 3.46882 0.375 3.71882 0.375 4.03132C0.375 4.34382 0.625 4.59382 0.9375 4.59382H18.25L16.2188 7.00007C16.0312 7.21882 16.0625 7.56257 16.2812 7.78132C16.375 7.87507 16.5 7.90632 16.625 7.90632C16.7812 7.90632 16.9375 7.84382 17.0312 7.71882L19.1875 5.15632C19.75 4.46882 19.75 3.53132 19.2188 2.90632Z" />
    //               </svg>
    //             </span>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className=" ">
      <div className="container flex flex-col justify-center p-6 mx-auto  pb-20 pt-40 md:flex-row md:justify-between max-w-[1000px] ">
        <div className=" flex flex-col justify-center p-6 text-center rounded-sm md:max-w-md xl:max-w-lg md:text-left gap-3">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl  capitalize leading-[3.5rem] headingslide1">
            Welcome To National Youth & Students Convention
          </h1>
          <div className="flex justify-center md:justify-start py-3">
            <Link
              href="/register"
              className="px-5 py-3 rounded border-white border flex items-center gap-3 w-fit hover:border-yellow-500 transition-all duration-300 ease-in-out hover:text-yellow-500"
            >
              <span>Register Now</span>

              <span className="pl-2">
                <svg width="20" height="8" viewBox="0 0 20 8" className="fill-current">
                  <path d="M19.2188 2.90632L17.0625 0.343819C16.875 0.125069 16.5312 0.0938193 16.2812 0.281319C16.0625 0.468819 16.0312 0.812569 16.2188 1.06257L18.25 3.46882H0.9375C0.625 3.46882 0.375 3.71882 0.375 4.03132C0.375 4.34382 0.625 4.59382 0.9375 4.59382H18.25L16.2188 7.00007C16.0312 7.21882 16.0625 7.56257 16.2812 7.78132C16.375 7.87507 16.5 7.90632 16.625 7.90632C16.7812 7.90632 16.9375 7.84382 17.0312 7.71882L19.1875 5.15632C19.75 4.46882 19.75 3.53132 19.2188 2.90632Z" />
                </svg>
              </span>
            </Link>
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
            src="/images/DP_Banner_Royal_Diadem.jpg"
            alt=""
            // className="object-contain h-72 sm:h-80 md:h-96 xl:h-112 2xl:h-128 translate-y-[50px]"
            className="translate-y-[-30px] sm:w-[400px] md:w-full md:translate-y-[50px]"
            width={700}
            height={1000}
          />
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSlide2
