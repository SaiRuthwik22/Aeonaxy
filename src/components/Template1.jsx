import React,{useState} from 'react'
import "../css/template1.css"
import { NavLink } from 'react-router-dom'
import { useGlobal } from '../GlobalContext'

function Template1() {
    const {setSignin} = useGlobal()
    setSignin(false)
    const [error,setError] =useState("")
    const [signupCred,setSignupCred] = useState({
        Name:"",
        Username:"",
        Email:"",
        Password:""
    })
    function handleChange(e){
        setSignupCred({
            ...signupCred,
            [e.target.id]:e.target.value
        })
    }
  return (
    <div className='container'>
        <div className='template1-leftcontainer'>
            <h3>dribble</h3>
            <h2>Discover the worlds top Designers & Creators</h2>
        </div>
        <div className='template1-rightcontainer'>
            <p className='existing' >Already a member? <a href="#">Sign In</a> </p>
            <form action="">
            <h2>Sign up to Dribble</h2>
            {error ? <p style={{color:"red"}} className='displayerror' >*{error}</p> :""}
            <div className='nameandusername' >
                <div className='inputfields'>
                    <label htmlFor="Name" className='label'>Name</label>
                    <input type="text" id='Name'  value={signupCred.Name} onChange={handleChange} />
                </div>
                <div className='inputfields username'>
                    <label htmlFor="Username" className='label'>Username</label>
                    <input type="text" className={`${error ? "error" : "" }`} id='Username' value={signupCred.Username} onChange={handleChange}  />
                </div>
            </div>
            <div className='inputfields'>
                    <label htmlFor="Email" className='label'>Email</label>
                    <input type='email' id='Email' value={signupCred.Email} onChange={handleChange} />
            </div>
            <div className='inputfields'>
                    <label htmlFor="Password" className='label' >Password</label>
                    <input type="password" id='Password' value={signupCred.Password} onChange={handleChange}  />
            </div>
            <div className='inputcheckbox' >
            <input type="checkbox" name="" id="checkbox" />
            <label htmlFor="checkbox" className='checkboxtext' >Creating an account means you're okay with our <a href="#">Terms of Service,PrivacyPolicy,</a> and our default <a href="#">Notification Settings</a> </label>
            </div>
            <NavLink to="/create-profile"><button className='button'>Create Account</button></NavLink>
            <p className='captchatext' >This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply </p>
            </form>
        </div>
    </div>
  )
}

export default Template1