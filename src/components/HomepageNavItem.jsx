export default function HomepageNavItem({title}) {
  // event handlers
  function onMouseDownHandler(e) {
    e.currentTarget.classList.add("cursor-grabbing")
  }
  function onMouseUpHandler(e) {
    e.currentTarget.classList.remove("cursor-grabbing")
  }
  function onMouseLeaveHandler(e) {
    e.currentTarget.classList.remove("cursor-grabbing")
  }


  return (
    <>
      <a
        className={`HomepageNavItem ${title}`}
        onMouseDown={onMouseDownHandler}
        onMouseUp={onMouseUpHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <b>{title}</b>
      </a>
    </>
  )
}
