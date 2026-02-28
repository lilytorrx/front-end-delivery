import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Copy from './components/Footer/Copy'
import './assets/css/global.css'
import './assets/css/media-query.css'

function App() {

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
      <Copy/>
    </>
  )
}

export default App
