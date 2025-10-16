import React from 'react'
import Navbar from './Components/Navbar'
import Manager from './Components/Manager'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-[83vh]'>
    <Manager/>
    </div>
    <Footer/>
    </>
  )
}

export default App