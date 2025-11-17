import { useState, useEffect } from "react"


export default function SubMenuBackground({CurrentMenu=null, CurrentPage=null}) {
  const [ClassNames, setClassNames] = useState("")


  useEffect(() => {
    if (CurrentMenu)
      setClassNames("shown")
    if (CurrentPage)
      setClassNames("content-shown")
    if (!(CurrentMenu || CurrentPage))
      setClassNames("hidden")
  }, [CurrentMenu, CurrentPage])


  // return the React component
  return (
    <div id="SubMenuBackground" className={`${ClassNames}`}></div>
  )
}