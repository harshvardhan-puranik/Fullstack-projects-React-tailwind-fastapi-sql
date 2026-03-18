import React from 'react'
import Video from '../components/home/Video'
import Homeherotext from '../components/home/Homeherotext'
import Homebottomtext from '../components/home/Homebottomtext'
import Content from '../components/home/Content'
import RealTimeDate from '../components/common/RealTimeDate'
const Home = () => {
  return (
  <div>
    <div className='h-screen w-screen fixed'>
      <Video/>
    </div>
    <div className="h-screen w-screen overflow-hidden relative flex flex-col justify-between text-white">
      <Homeherotext></Homeherotext>
      <Content/>
      <div className='flex items-center gap-1'>
      <RealTimeDate/>
      <Homebottomtext></Homebottomtext>
      
      </div>
    </div>
  </div>
  )
}

export default Home