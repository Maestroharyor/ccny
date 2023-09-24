import Link from 'next/link'
import React from 'react'

const HomeCTA = () => {
  return (
    <section>
      <section className="grid items-center justify-center grid-cols-1 px-4 py-24 text-center lg:grid-cols-5">
        <div className=" lg:col-start-2 col-span-3">
          <p className="mb-2 text-base font-semibold text-primary">Don&apos;t Miss Out!!!</p>
          <h2 className="mb-6 font-serif text-3xl font-normal tracking-tight md:leading-tight md:text-4xl md:mb-6">
            Join other Youths in the National Youth Convention Today
          </h2>
          <Link
            href="register"
            className=" shadow-xl px-8 py-3 rounded bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 ease-in-out mt-3 block w-fit mx-auto"
          >
            Register now
          </Link>
        </div>
      </section>
    </section>
  )
}

export default HomeCTA
