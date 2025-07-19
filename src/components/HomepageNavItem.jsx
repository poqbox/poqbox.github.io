import { useState, useEffect } from 'react'
import TypedText from './TypedText'

export default function HomepageNavItem({title, begin_animation=true, setNextAnimationState=null}) {
  const [Style, setStyle] = useState({height: 0, padding: 0}) // hide the component until the animation begins


  // initial effect
  useEffect(() => {
    if (begin_animation)
      setStyle({})  // unhide the component
  }, [begin_animation])


  // event handlers
  function onMouseDownHandler(e) {
    e.currentTarget.classList.add("cursor-grabbing")
  }
  function onMouseUpHandler(e) {
    e.currentTarget.classList.remove("cursor-grabbing")
  }
  function onMouseLeaveHandler(e) {
    e.currentTarget.classList.remove("cursor-grabbing")
  }


  return (
    <>
      <a
        className={`HomepageNavItem ${title}`}
        onMouseDown={onMouseDownHandler}
        onMouseUp={onMouseUpHandler}
        onMouseLeave={onMouseLeaveHandler}
        style={Style}
      >
        <TypedText
          text={title}
          style={{fontWeight: "bold"}}
          base_speed={60}
          max_text_cursor_blinks={0}
          custom_ending_duration={60}
          begin_animation={begin_animation}
          setNextAnimationState={setNextAnimationState}
        />
      </a>
    </>
  )
}
