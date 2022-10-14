import React from 'react'
import Chat from '../Components/Chat'
import Sidebar from '../Components/Sidebar'
import "../style.scss"

const Home = () => {
  return (
    <div className='Home'>
        <div className="Container">
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}

export default Home