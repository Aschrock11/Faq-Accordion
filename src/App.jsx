import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Photo from './Components/Photo'
import Faq from './Components/Faq'

function App() {

  return (
    <div className='background-container'>
      < img src="../faq-accordion-card-main/images/illustration-box-desktop.svg" alt="" className="box-image" />
      <div className='main-container'>
        <Photo />
        <Faq />
      </div>
    </div>
  )
}

export default App
