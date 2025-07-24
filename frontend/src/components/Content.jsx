import { useState, useEffect } from "react"


export default function Content({show=true, setCurrentPage=null, Body=null}) {
  const [Style, setStyle] = useState({inset: "auto auto auto 100%"})


  useEffect(() => {
    if (show) {
      if (setCurrentPage)
        setCurrentPage("Content")
      setStyle({})
    }
    else {
      setStyle({inset: "auto auto auto 100%"})
    }
  }, [show])


  return (
    <div className="Content" style={Style}>
      {Body}
    </div>
  )
}