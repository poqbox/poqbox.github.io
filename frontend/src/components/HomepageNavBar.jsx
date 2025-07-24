import { useState, useEffect } from "react"


export default function HomepageNavBar({ContentPage=null, Body}) {
  const [ClassNames, setClassNames] = useState(null)


  // useEffect for the component's transition animation
  useEffect(() => {
    if (ContentPage)
      setClassNames("sidebar")
    else
      setClassNames(null)
  }, [ContentPage])


  // return the React component
  return (
    <nav id='HomepageNavBar' className={ClassNames}>
      {Body}
    </nav>
  )
}