import React, { useState } from 'react'
import logo from '../assets/img/logo.svg'
import hamIcon from '../assets/img/icon-hamburger.svg'
import closeIcon from '../assets/img/icon-close.svg'

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

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 z-30 flex justify-between items-center py-12 px-5 md:px-0 container mx-auto'>
      <img className='w-[50%] md:w-[15%] z-20' src={logo} alt='logo image'/>
      <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer z-20 md:hidden">
        <img src={hamIcon}  alt="ham icon" className={`${menuOpen == true ? 'hidden' : ''} `}/>
        <img src={closeIcon} alt="close icon" className={`${menuOpen == false ? 'hidden' : ''}`}/>
      </div>
      <nav className={`fixed top-[-100vh] left-0 right-0 h-screen bg-black text-white transition-all ease-in-out duration-300 md:hidden ${menuOpen == true ? 'top-[0]' : ''}`}>
        <ul className='px-5 flex flex-col justify-center items-start h-full'>
          {
            navData.map((e, i) => (
              <li key={i} className="pb-4">
                <a href={e.url} className="text-3xl uppercase">
                  {e.text}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
      <nav className={` text-white hidden md:block`}>
        <ul className='md:flex'>
          {
            navData.map((e, i) => (
              <li key={i} className="ml-5">
                <a href={e.url} className="">
                  {e.text}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header