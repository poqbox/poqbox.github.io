import { useState, useEffect } from "react"
import TypedText from "./TypedText"


export default function HomepageHeader({CurrentPage=null, obscur=false, begin_animation=true, setNextAnimationState=null}) {
  const [ClassNames, setClassNames] = useState(null)
  const [Style, setStyle] = useState(null)


  // useEffect for obscuring the component
  useEffect(() => {
    if (obscur)
      setStyle({filter: "blur(2px)"})
    else
      setStyle(null)
  }, [obscur])

  // useEffect for the component's hiding animation
  useEffect(() => {
    if (CurrentPage)
      setClassNames("hidden")
    else
      setClassNames(null)
  }, [CurrentPage])


  // return the React component
  return (
    <header id="HomepageHeader" className={ClassNames} style={Style}>
      <TypedText
        className="title"
        text="Hi, I'm Kevin"
        typing_delay={4000}
        ending_duration={3300}
        begin_animation={begin_animation}
        setNextAnimationState={setNextAnimationState}
      />
    </header>
  )
}