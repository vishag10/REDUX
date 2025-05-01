import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/projucts'
import { createBrowserRouter,createRoutesFromElements,RouterProvider, Route} from 'react-router-dom'
import Dashboard from './components/dashboard'
import Cart from './components/cart'
import Rootlayout from './components/Rootlayout'

function App() {
  const router= createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Rootlayout/>}>
       <Route index element={<Dashboard/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
