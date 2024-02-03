import React from 'react'
import Banner from '../components/Banner'
import EventList from '../components/EventList'
import EventList2 from '../components/EventList2'

function Home() {
  return (
    <div className='p-4 w-full h-full'>
        <Banner />
        <EventList />
        <EventList2 />
    </div>
  )
}

export default Home