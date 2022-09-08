import React from 'react'
import Card from './Card'

const Gallery = () => {

  const dataCards = [
    {
      title: "deep earth",
      imgMd: "md:bg-img0-md",
      imgSm: "bg-img0-sm",
    },
    {
      title: "night arcade",
      imgMd: "md:bg-img1-md",
      imgSm: "bg-img1-sm",
    },
    {
      title: "soccer team vr",
      imgMd: "md:bg-img2-md",
      imgSm: "bg-img2-sm",
    },
    {
      title: "the grid",
      imgMd: "md:bg-img3-md",
      imgSm: "bg-img3-sm",
    },
    {
      title: "from up above vr",
      imgMd: "md:bg-img4-md",
      imgSm: "bg-img4-sm",
    },
    {
      title: "pocket borealis",
      imgMd: "md:bg-img5-md",
      imgSm: "bg-img5-sm",
    },
    {
      title: "the curiosity",
      imgMd: "md:bg-img6-md",
      imgSm: "bg-img6-sm",
    },
    {
      title: "make it fisheye",
      imgMd: "md:bg-img7-md",
      imgSm: "bg-img7-sm",
    },
  ]

  return (
    <section className='container mx-auto mb-24'>
      <div className='md:flex md:justify-between md:items-center md:py-20'>
        <h1 className='text-4xl md:text-7xl mb-12 md:mb-0'>
          OUR CREATIONS
        </h1>
        <button className='hidden md:block border-2 border-solid border-black px-10 py-2 transition-all duration-300 ease-in-out hover:bg-black hover:text-white mt-8 md:mt-0 text-1xl tracking-widest'>SEE ALL</button>
      </div>
      <div className='flex flex-col md:flex-wrap md:flex-row gap-5 mx-5 md:mx-0'>
        {
          dataCards.map((e,i) => (
            <Card props={e} key={i}/>
          ))
        }
      </div>
      <button className='md:hidden border-2 border-solid border-black px-10 py-2 transition-all duration-300 ease-in-out hover:bg-black hover:text-white mt-8 text-1xl tracking-widest'>SEE ALL</button>
    </section>
  )
}

export default Gallery