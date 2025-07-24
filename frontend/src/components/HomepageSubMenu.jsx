import { useEffect, useState } from "react"
import ObfuscatedText from "./ObfuscatedText"
import data from '../data/data'
import ToHomepageButton from "./ToHomepageButton"


export default function HomepageSubMenu({CurrentMenu=null, ContentPage=null, setContentPage=null}) {
  const [MenuList, setMenuList] = useState([])


  // useEffect for setting the contents of the sub-menu
  useEffect(() => {
    switch (CurrentMenu) {
      case data["homepage-navbar"][0].title:
        setMenuList([
          <a className="HomepageNavSubItem" onClick={handleOnClick}>
            Undergoing
          </a>,
          <a className="HomepageNavSubItem" onClick={handleOnClick}>
            construction
          </a>
        ])
        break
      case data["homepage-navbar"][1].title:
        setMenuList([
          <a className="HomepageNavSubItem" onClick={handleOnClick}>
            Constructing...
          </a>
        ])
        break
      case data["homepage-navbar"][2].title:
        setMenuList([
          <a className="HomepageNavSubItem" onClick={handleOnClick}>
            ETA: <ObfuscatedText length={2} speed={120} style={{fontFamily: "inherit"}} />
          </a>
        ])
        break
      default:
        setMenuList([])
    }
  }, [CurrentMenu])


  // event handlers
  function handleOnClick() {
    setContentPage("WIP")
  }


  // return the React component
  return (
    <div id="HomepageSubMenu">
      {(ContentPage) ? <ToHomepageButton setContentPage={setContentPage} /> : null}
      {MenuList}
    </div>
  )
}
