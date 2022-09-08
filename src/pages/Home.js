import React from 'react'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Intro from '../components/Intro'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Intro/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default Home