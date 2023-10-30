interface Props {
  id: number
  name: string
  link: string
}

function Entries(props: Props) {
  return (
    <div className="entryClass">
      <h3>
        Title:<a href={props.link}>{props.name}</a>
      </h3>
    </div>
  )
}

export default Entries
