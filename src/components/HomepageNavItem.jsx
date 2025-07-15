export default function HomepageNavItem({title}) {
  return (
    <>
      <a className={`homepage-nav-item ${title}`}>
        <b>{title}</b>
      </a>
      <br />
    </>
  )
}
