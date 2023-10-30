interface Props {
  id: number
  name: string
  link: string
}

function RecentEntry(props: Props) {
  return (
    <>
      <a href={props.link}>
        <h3>{props.name}</h3>
      </a>
    </>
  )
}

export default RecentEntry
