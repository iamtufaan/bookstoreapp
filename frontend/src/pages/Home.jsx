import React from 'react'
import HomeBanner from '../components/HomeBanner'
import FreeBooks from '../components/FreeBooks'

const Home = () => {
  return (
    <div className=' w-full min-h-screen py-24'>
      <HomeBanner/>
      <FreeBooks/>
    </div>
  )
}

export default Home
