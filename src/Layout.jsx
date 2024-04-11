import  { useState } from 'react'
import {Outlet} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import { GlobalContext } from './GlobalContext'

function Layout() {
  const [signin,setSignin] = useState(false)
  return (
    <GlobalContext.Provider value={{signin,setSignin}} >
    {signin ?<Header/>:""}
    <Outlet />
   {signin ? <Footer /> :""}
    </GlobalContext.Provider>
  )
}

export default Layout