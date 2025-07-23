import { useEffect, useState } from "react"
import ObfuscatedText from "./ObfuscatedText"
import data from '../data/data'


export default function HomepageSubMenu({MenuTitle=null}) {
  const [MenuList, setMenuList] = useState([])


  // useEffect for setting the contents of the sub-menu
  useEffect(() => {
    switch (MenuTitle) {
      case data["homepage-navbar"][0].title:
        setMenuList([
          <a className="HomepageNavSubItem">
            Undergoing
          </a>,
          <a className="HomepageNavSubItem">
            construction
          </a>
        ])
        break
      case data["homepage-navbar"][1].title:
        setMenuList([
          <a className="HomepageNavSubItem">
            Constructing...
          </a>
        ])
        break
      case data["homepage-navbar"][2].title:
        setMenuList([
          <a className="HomepageNavSubItem">
            ETA: <ObfuscatedText length={2} speed={120} style={{fontFamily: "inherit"}} />
          </a>
        ])
        break
      default:
        setMenuList([])
    }
  }, [MenuTitle])


  // return the React component
  return (
    <div id="HomepageSubMenu">
      {MenuList}
    </div>
  )
}
