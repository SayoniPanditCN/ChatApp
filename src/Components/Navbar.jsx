import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../Firebase'
import img from "../Images/Img.jpg"

const Navbar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className='Navbar'>
      <div className="Logo">Chat with us</div>
      <div className="User">
        <img src={currentUser.photoURL} alt=""/>
        <span>{currentUser.displayName}</span>
        <button onClick={()=> signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar