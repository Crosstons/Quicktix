import React from 'react'
import Banner from '../components/Banner'
import EventList from '../components/EventList'

function Home() {
  return (
    <div className='p-4 w-full h-full'>
        <Banner />
        <EventList />
    </div>
  )
}

export default Home