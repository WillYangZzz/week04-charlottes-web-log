interface Props {
  id: number
  name: string
  link: string
}

function recentEntry(props: Props) {
  return (
    <div className="entryContainer">
      <h3>{props.name}</h3>
      <p>{props.link}</p>
      ...
    </div>
  )
}

export default recentEntry
