import React from 'react'

const Hero = () => {
  return (
    <section className='bg-hero-sm h-screen w-screen bg-cover bg-center bg-no-repeat relative md:h-[75vh] md:bg-hero-md'>
      <div className='hidden md:block absolute top-0 left-0 right-0 bottom-0 bg-black opacity-[.4]'></div>
      <div className='container w-screen h-screen md:h-[70vh] flex flex-col justify-center px-5 md:px-0 md:items-start md:mx-auto md:relative'>
        <div className='border-2 border-solid border-white w-full md:w-2/4 text-white text-[2.60rem] leading-[2.65rem] md:text-[5.1rem] md:leading-[4.7rem] text-left p-6 md:mt-52'>
          IMMERSIVE EXPERIENCES THAT DELIVER
        </div>
      </div>
    </section>
  )
}

export default Hero