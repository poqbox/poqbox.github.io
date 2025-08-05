export default function IframePage({href, title=null}) {
  return <iframe
    id={(title) ? title.toLowerCase().replace(/\s/g, "-") : null}
    src={href}
    height="100%"
    width="100%"
  ></iframe>
}