import { useState, useEffect } from "react"
import IframePage from "./Pages/IframePage"
import UnderConstructionPage from "./Pages/UnderConstructionPage"
import AlignContentButton from "./AlignContentButton"


export default function Content({style=null, CurrentPage=true, ContentAlignment=null, setContentAlignment=null}) {
  const [ClassNames, setClassNames] = useState("")
  const [Page, setPage] = useState(null)


  // useEffect for the component's hiding animation
  useEffect(() => {
    if (CurrentPage) {
      setClassNames("shown")

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
      setClassNames("hidden")
  }, [CurrentPage])


  // return the React component
  return (
    <div id="content-container" className={`${ClassNames} ${ContentAlignment}`}>
      <div className="Content" style={style}>
        {Page}
      </div>
      {(setContentAlignment) ?
        <AlignContentButton
          CurrentPage={CurrentPage}
          ContentAlignment={ContentAlignment}
          setContentAlignment={setContentAlignment}
        />
        : null
      }
    </div>
  )
}