import { useState, useEffect } from "react"
import UnderConstructionPage from "./UnderConstructionPage"


export default function Content({style=null, ContentPage=true}) {
  const [ClassNames, setClassNames] = useState("")
  const [Page, setPage] = useState(null)


  // useEffect for the component's hiding animation
  useEffect(() => {
    if (ContentPage) {
      setClassNames(" shown")
      switch (ContentPage) {
        default:
          setPage(<UnderConstructionPage />)
          break
      }
    }
    else
      setClassNames(" hidden")
  }, [ContentPage])


  // return the React component
  return (
    <div className={`Content${ClassNames}`} style={style}>
      {Page}
    </div>
  )
}