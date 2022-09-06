import React from 'react'

const Hero = () => {
  return (
    <section className='bg-hero-sm h-screen w-screen bg-cover bg-center bg-no-repeat relative md:h-[70vh] md:bg-hero-md'>
      <div className='container w-screen h-screen md:h-[70vh] flex flex-col justify-center items-center md:items-start md:mx-auto'>
        <div className='border-2 border-solid border-white w-10/12 md:w-2/4 text-white text-[2.60rem] leading-[2.65rem] md:text-[5.1rem] md:leading-[4.7rem] text-left p-6'>
          IMMERSIVE EXPERIENCES THAT DELIVER
        </div>
      </div>
    </section>
  )
}

export default Hero