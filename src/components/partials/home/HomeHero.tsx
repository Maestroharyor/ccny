import HomeHeroSlide1 from '@/components/elements/HomeHeroSlide1'
import HomeHeroSlide2 from '@/components/elements/HomeHeroSlide2'
import HomeHeroSlide3 from '@/components/elements/HomeHeroSlide3'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const HomeHero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  }
  return (
    <section className="bg-gradient-radial from-gray-900 via-gray-950 to-gray-950 dark:bg-gray-800 dark:text-gray-100  text-white relative overflow-hidden w-full">
      <Slider {...settings}>
        <HomeHeroSlide1 />
        <HomeHeroSlide2 />
        <HomeHeroSlide3 />
      </Slider>
    </section>
  )
}

export default HomeHero
