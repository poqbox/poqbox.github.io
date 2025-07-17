import { useState } from 'react'
import './App.css'
import HomepageNavBar from './components/HomepageNavBar'
import TypedText from './components/TypedText'

export default function App() {
  return (
    <div id='homepage'>
      <header>
        <TypedText
          text="Hi, I'm Kevin"
          style={{
            position: "absolute",
            fontSize: "80px",
            fontWeight: "bold",
            height: "1.3em"
          }}
          typing_delay={4000}
        />
        <div style={{height: "120px"}}></div>
      </header>
      <div className='about-me'></div>
      <HomepageNavBar />
    </div>
  )
}
