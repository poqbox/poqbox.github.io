import { useState, useEffect } from "react"


export default function Content({show=true, setCurrentPage=null, Body=null}) {
  const [ClassNames, setClassNames] = useState("")


  // useEffect for the component's hiding animation
  useEffect(() => {
    if (show) {
      if (setCurrentPage)
        setCurrentPage("Content")
      setClassNames("")
    }
    else
      setClassNames(" hidden")
  }, [show])


  // return the React component
  return (
    <div className={`Content${ClassNames}`}>
      {Body}
    </div>
  )
}