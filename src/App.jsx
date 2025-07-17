import { useState } from 'react'
import './App.css'
import HomepageNavBar from './components/HomepageNavBar'
import TypedText from './components/TypedText'

export default function App() {
  const [KeyState1, setKeyState1] = useState(true)
  const [KeyState2, setKeyState2] = useState(false)
  const [KeyState3, setKeyState3] = useState(false)

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
          begin_animation={KeyState1}
          setNextAnimationState={setKeyState2}
        />
        <div style={{height: "120px"}}></div>
      </header>
      <div className='about-me'></div>
      <HomepageNavBar begin_animation={KeyState2} setNextAnimationState={setKeyState3} />
    </div>
  )
}
