import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Menu from './components/Menu'
import Service from './components/Service'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <div className='w-full overflow-hidden'> 
      <Header/>
      <About/>
      <Menu/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
