import React from 'react'
import logo from '../assets/img/logo.svg'
import fb from '../assets/img/icon-facebook.svg'
import twit from '../assets/img/icon-twitter.svg'
import pint from '../assets/img/icon-pinterest.svg'
import inst from '../assets/img/icon-instagram.svg'


const navData = [
  {
    text: 'About',
    url: '#',
  },
  {
    text: 'Careers',
    url: '#',
  },
  {
    text: 'Events',
    url: '#',
  },
  {
    text: 'Products',
    url: '#',
  },
  {
    text: 'Support',
    url: '#',
  },
];

const Footer = () => {
  return (
    <footer className='bg-black text-white py-14 '>
      <div className='container mx-auto md:flex md:justify-between items-center'>
        <div className='flex flex-col items-center md:items-start'>
          <img className='w-[40%] mb-2' src={logo} alt='logo'/>
          <nav>
            <ul className='md:flex md:gap-8 font-[Alata]'>
              {
                navData.map((e, i) => (
                  <li key={i} className='pt-4 font-semibold md:border-b-2 md:border-solid md:border-transparent md:hover:border-b-2 md:hover:border-solid md:hover:border-current'>
                    <a href={e.url}>
                      {e.text}
                    </a>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
        <div className='mt-10 md:mt-0 flex flex-col items-center md:items-end'>
          <nav>
            <ul className='flex justify-center items-center gap-4'>
              <li className='md:border-b-2 md:border-solid md:border-transparent md:hover:border-b-2 md:hover:border-solid md:hover:border-current md:pb-1'>
                <a href='https://www.frontendmentor.io/profile/airowl'>
                  <img src={fb} alt='social icon' />
                </a>
              </li>
              <li className='md:border-b-2 md:border-solid md:border-transparent md:hover:border-b-2 md:hover:border-solid md:hover:border-current md:pb-1'>
                <a href='https://www.frontendmentor.io/profile/airowl'>
                  <img src={twit} alt='social icon' />
                </a>
              </li>
              <li className='md:border-b-2 md:border-solid md:border-transparent md:hover:border-b-2 md:hover:border-solid md:hover:border-current md:pb-1'>
                <a href='https://www.frontendmentor.io/profile/airowl'>
                  <img src={pint} alt='social icon' />
                </a>
              </li>
              <li className='md:border-b-2 md:border-solid md:border-transparent md:hover:border-b-2 md:hover:border-solid md:hover:border-current md:pb-1'>
                <a href='https://www.frontendmentor.io/profile/airowl'>
                  <img src={inst} alt='social icon' />
                </a>
              </li>
            </ul>
          </nav>
          <p className='mt-4'>?? 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer