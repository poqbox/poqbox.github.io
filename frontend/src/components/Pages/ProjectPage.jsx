export default function ProjectPage({title, description}) {
  return (
    <div className="ProjectPage">
      <h2>{title}</h2>
      <div>{description}</div>
    </div>
  )
}