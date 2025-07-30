import { useState, useEffect } from "react"
import TypedText from "./TypedText"


export default function HomepageHeader({ContentPage=null, begin_animation=true, setNextAnimationState=null}) {
  const [ClassNames, setClassNames] = useState(null)


  // useEffect for the component's hiding animation
  useEffect(() => {
    if (ContentPage)
      setClassNames("hidden")
    else
      setClassNames(null)
  }, [ContentPage])


  // return the React component
  return (
    <header id="HomepageHeader" className={ClassNames}>
      <TypedText
        text="Hi, I'm Kevin"
        typing_delay={4000}
        ending_duration={3300}
        begin_animation={begin_animation}
        setNextAnimationState={setNextAnimationState}
      />
    </header>
  )
}