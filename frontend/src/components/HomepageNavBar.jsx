import { useState, useEffect } from "react"


export default function HomepageNavBar({CurrentPage=null, children}) {
  const [ClassNames, setClassNames] = useState(null)


  // useEffect for the component's transition animation
  useEffect(() => {
    if (CurrentPage)
      setClassNames("sidebar")
    else
      setClassNames(null)
  }, [CurrentPage])


  // return the React component
  return (
    <nav id='HomepageNavBar' className={ClassNames}>
      {children}
    </nav>
  )
}