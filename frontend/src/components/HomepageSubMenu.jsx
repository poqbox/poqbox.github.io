import { useEffect, useState } from "react"
import ObfuscatedText from "./ObfuscatedText"
import data from '../data/data'


export default function HomepageSubMenu({MenuTitle=null}) {
  const [MenuList, setMenuList] = useState([])


  useEffect(() => {
    for (const item of data["homepage-navbar"]) {
      if (MenuTitle === item.title) {
        setMenuList([
          <a className="HomepageNavSubItem">
            <ObfuscatedText length={4} speed={120} />
          </a>
        ])
        break
      }
    }
  }, [MenuTitle])


  return (
    <div id="HomepageSubMenu">
      {MenuList}
    </div>
  )
}
