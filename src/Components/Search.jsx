import React from 'react'
import img from "../Images/Img.jpg"

const Search = () => {
  return (
    <div className='Search'>
      <div className="SearchForm">
        <input type="text" placeholder='Find user ' />
      </div>
      <div className="UserChat">
        <img src={img} alt='' />
        <div className="UserChatInfo">
          Sayonii
        </div>
      </div>
    </div>
  )
}

export default Search