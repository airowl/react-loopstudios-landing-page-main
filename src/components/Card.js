import React from 'react'

const Card = ({ props }) => {
  const {title, imgMd, imgSm} = {...props};

  return (
    <div className={`${imgSm} ${imgMd} bg-cover bg-center bg-no-repeat h-36 md:h-[36rem] md:w-calc  relative`}>
      <div className='absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-gradient-to-r md:bg-gradient-to-t from-black'></div>
      <h3 className='uppercase text-white absolute left-5 md:left-8 bottom-5 md:bottom-10 text-3xl md:text-4xl w-2/4 md:w-3/5 text-left'>{title}</h3>
    </div>
  )
}

export default Card