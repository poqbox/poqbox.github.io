import { useState, useEffect } from 'react'
import TypedText from './TypedText'


export default function HomepageNavItem({title, begin_animation=true, setNextAnimationState=null, sendResponse=null, CurrentPage=null}) {
  const [Title, setTitle] = useState(title)
  const [Style, setStyle] = useState({height: 0, padding: 0}) // hide the component until the animation begins


  // initial effect
  useEffect(() => {
    if (begin_animation)
      setStyle({})  // unhide the component
  }, [begin_animation])


  // event handlers
  function onMouseDownHandler(e) {
  }
  function onMouseUpHandler(e) {
    if (!CurrentPage && sendResponse) {
      if (!e.currentTarget.classList.contains("active")) {
        sendResponse(Title)
      }
      else {
        e.currentTarget.classList.remove("active")
        sendResponse(null)
      }
    }
  }
  function onMouseLeaveHandler(e) {
    e.currentTarget.classList.remove("cursor-grabbing")
    if (!e.currentTarget.classList.contains("active"))
      setStyle({})
  }


  // return the React component
  return (
    <>
      <a
        id={`${Title}`}
        className={`HomepageNavItem ${Title}`}
        onMouseDown={onMouseDownHandler}
        onMouseUp={onMouseUpHandler}
        onMouseLeave={onMouseLeaveHandler}
        style={Style}
      >
        <TypedText
          text={Title}
          style={{fontWeight: "bold"}}
          base_speed={60}
          max_text_cursor_blinks={0}
          ending_duration={60}
          begin_animation={begin_animation}
          setNextAnimationState={setNextAnimationState}
        />
      </a>
    </>
  )
}
