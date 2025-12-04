import { useState, useEffect } from "react"


export default function SubMenuHeader({ActiveMenu, CurrentPage=true, ContentAlignment=null}) {
  const [ClassNames, setClassNames] = useState("")


  // useEffect for the component's hiding animation
  useEffect(() => {
    if (CurrentPage) {
      setClassNames("shown")
    }
    else
      setClassNames("hidden")
  }, [CurrentPage])


  // return the React component
  return (
    <div id="SubMenuHeader" className={`${ClassNames} ${ContentAlignment}`}>
      {ActiveMenu ? ActiveMenu.toUpperCase() : ""}
    </div>
  )
}