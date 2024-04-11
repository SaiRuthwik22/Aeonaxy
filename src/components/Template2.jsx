import React, { useState } from 'react'
import "../css/template2.css"
import image2 from "../assets/add-photo.png"
import Template1 from "./Template1.jsx"
import { NavLink } from 'react-router-dom'
import { useGlobal } from '../GlobalContext'

function Template2() {
  const {setSignin} = useGlobal()
  setSignin(false)
  const [userImage,setUserImage] = useState("")
  const [location,setLocation] =useState("")
  function handleImage(e){
    setUserImage(URL.createObjectURL(e.target.files[0]))
  }
  function handleLocation(e){
    setLocation(e.target.value)
  }
  function handleKey(e){
    if (e.key == "Enter") {
      console.log("ok");
    }
  }
  return (
    <div className='template2-container1'>
        <h3 className='template2-title'>dribbble</h3>
        <div className='template2-maincontainer' >
            <div className='template2-content'>
            <h1 className='welcome-title' >Welcome!Let's create your profile</h1>
            <h4>Let others get to know better! You can do these later</h4>
            <div className='image-section'>
            <h3>Add an Avatar</h3>
            <div className='image-container' >
                <div className={`${userImage?"":"circle"}` }>
                  <img src={userImage?userImage:image2} className={`${userImage ? "userImage":"camera-icon" }`} alt="xxx" />
                </div>
                <div className='fileupload-container'> 
                  <input type="file" id="fileupload" onChange={handleImage} />
                  <label htmlFor="fileupload" className='label-fileupload'>Choose image</label>
                  <p style={{color:"grey"}}>&gt; Or choose one of our defaults</p>
                </div>
            </div>
            </div>
            <h3>Add Your Location</h3>
            <input type="text" placeholder='Enter Location' value={location} onChange={handleLocation} onKeyDown={handleKey} />
            <NavLink to ={`${userImage&&location ? "/category":""}`}><button className={`  ${(userImage&&location) ? "":"button-disabled"}` } >Next</button></NavLink>
            <p className='last-text'>or Press <span>RETURN</span></p>
            </div>
        </div>
    </div>
  )
}

export default Template2