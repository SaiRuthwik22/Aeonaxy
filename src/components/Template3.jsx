import React from 'react'
import "../css/template3.css"
import image3 from "../assets/mail.jpg" 
import { useGlobal } from '../GlobalContext'
function Template3() {
  const {setSignin} = useGlobal()
  setSignin(true)
  return (
    <div className='template3-container'>
      <div className='template3-maincontainer'>
        <h2>Please Verify your email...</h2>
        <img src={image3} alt="" />
        <p>Please Verify your email address.we've sent a confirmation mail to:</p>
        <h4>aderfsdgd@gmil.com</h4>
        <p>click the confirmation mail to continue using dribble</p>
        <p>Didn't receive the mail?Check Your Spam folder or Click for <span>resend email confirmation</span></p>
        <p>Wrong mail address? <span>Change it.</span></p>
      </div>
    </div>
  )
}

export default Template3           