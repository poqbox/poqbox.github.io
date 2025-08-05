import { useState, useEffect } from "react"
import IframePage from "./Pages/IframePage"
import UnderConstructionPage from "./Pages/UnderConstructionPage"


export default function Content({style=null, CurrentPage=true}) {
  const [ClassNames, setClassNames] = useState("")
  const [Page, setPage] = useState(null)


  // useEffect for the component's hiding animation
  useEffect(() => {
    if (CurrentPage) {
      setClassNames(" shown")

      // prepare Content page
      // if CurrentPage is an object, compare its properties
      if (typeof CurrentPage === "object") {
        switch (CurrentPage.type) {
          // use an iframe if CurrentPage contains a URL
          case "href":
            setPage(<IframePage href={CurrentPage.href} title={CurrentPage.title} />)
            break
          default:
            setPage(<UnderConstructionPage />)
            break
        }
      }
      else {
        switch (CurrentPage) {
          default:
            setPage(<UnderConstructionPage />)
            break
        }
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