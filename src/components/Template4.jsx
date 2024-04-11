import React, { useState } from 'react'
import "../css/template4.css"
import designer from "../assets/designer.jpg"
import inspiraton from "../assets/inspiration.jpg"
import hire from "../assets/hire.jpg"
import { NavLink } from 'react-router-dom'
import { useGlobal } from '../GlobalContext'

function Template4() {
    const {setSignin} = useGlobal()
    setSignin(false)
    const[optionSelected,setOptionSelected] = useState(false)
    function handleoption(option){
        setOptionSelected(option)
    }
  return (
    <div className='template4-container'>
        <div className='template4-title'>
            <h3>dribble</h3>
            <NavLink to="/create-profile" ><button>&lt;</button></NavLink>
        </div>
        <div className='template4-maincontainer'>
            <h2>What brings you to dribble?</h2>
            <p>select the options that best describes you. Don't Worry, you can exploreother options later</p>
            <div className='template4-optioncontainer'>
                <div className='option option1'>
                    <img src={designer} alt="" />
                    <label htmlFor="option1" onClick={()=>handleoption("option1")} >I'm a designer looking to share my work</label>
                    <input type="radio" name="options" id="option1" checked={optionSelected === "option1"} onChange={()=>handleoption("option1")}/>
                </div>
                <div className='option option2'>
                    <img src={hire} alt="" />
                    <label htmlFor="option2" onClick={()=>handleoption("option2")}> I'm looking to hire a designer</label>
                    <input type="radio" name="options" id="option2" checked={optionSelected === "option2"} onChange={()=>handleoption("option2")}/>
                </div>
                <div className='option option3'>
                    <img src={inspiraton} alt="" />
                    <label htmlFor="option3" onClick={()=>handleoption("option3")}>I'm looking for design Inspiration</label>
                    <input type="radio" name="options" id="option3" checked={optionSelected === "option3"} onChange={()=>handleoption("option3")} />
                </div>
            </div>
            <NavLink to={`${optionSelected?"/verify":""}`}><button className={`${optionSelected?"":"button-disabled"}`} >Finish</button></NavLink>
        </div>
    </div>
  )
}

export default Template4