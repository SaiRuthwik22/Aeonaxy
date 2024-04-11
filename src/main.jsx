import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from "./Layout.jsx"
import Template1 from './components/Template1.jsx'
import Template3 from './components/Template3.jsx'
import Template2 from './components/Template2.jsx'
import Template4 from './components/Template4.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}  >
      <Route path='' element={<Template1 />}></Route>
      <Route path='/signup' element={<Template1 />}></Route>
      <Route path='/create-profile' element={<Template2 />}></Route>
      <Route path='/category' element={<Template4 />}></Route>
      <Route path='/verify' element={<Template3 />}></Route>
    </Route>
  ),{basename:"/Aeonaxy"}
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
)
