import { useState, useEffect } from "react"
import UnderConstructionPage from "./Pages/UnderConstructionPage"


export default function Content({style=null, CurrentPage=true}) {
  const [ClassNames, setClassNames] = useState("")
  const [Page, setPage] = useState(null)


  // useEffect for the component's hiding animation
  useEffect(() => {
    if (CurrentPage) {
      setClassNames(" shown")
      switch (CurrentPage) {
        default:
          setPage(<UnderConstructionPage />)
          break
      }
    }
    else
      setClassNames(" hidden")
  }, [CurrentPage])


  // return the React component
  return (
    <div className={`Content${ClassNames}`} style={style}>
      {Page}
    </div>
  )
}