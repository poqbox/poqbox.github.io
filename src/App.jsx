import { useState } from 'react'
import './App.css'
import useKeyStates from './util/useKeyStates'
import HomepageNavBar from './components/HomepageNavBar'
import TypedText from './components/TypedText'

export default function App() {
  const KeyStates = useKeyStates(3, true)

  return (
    <div id='homepage'>
      <header>
        <TypedText
          text="Hi, I'm Kevin"
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            height: "1.3em"
          }}
          typing_delay={4000}
          begin_animation={KeyStates[0].KeyState}
          setNextAnimationState={KeyStates[1].setKeyState}
        />
      </header>
      <div className='about-me'></div>
      <HomepageNavBar begin_animation={KeyStates[1].KeyState} setNextAnimationState={KeyStates[2].setKeyState} />
    </div>
  )
}
