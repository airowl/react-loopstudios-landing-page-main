import React from 'react'

const Intro = () => {
  return (
    <section className='w-screen py-32 container mx-auto'>
      <div className='flex flex-col md:flex-row justify-center md:justify-start items-center p-5 md:p-0 md:relative'>
        <div className='bg-intro-sm md:bg-intro-md w-full h-64 bg-cover bg-center bg-no-repeat md:w-4/6 md:h-[40rem]' />
        <div className='px-5 md:p-0 md:pt-20 md:pl-20 md:absolute bottom-0 right-0 md:bg-white md:w-1/2 md:text-left'>
          <h1 className='text-4xl my-6 md:m-0 md:mb-8 md:text-7xl'>
            THE LEADER IN INTERACTIVE VR
          </h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro