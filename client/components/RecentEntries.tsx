interface RecentEntry {
  id: number
  name: string
  link: string
}
interface Props {
  entries: RecentEntry[]
}

function RecentEntries(props: Props) {
  return (
    <div>
      <h2>Recent Entries</h2>
      {props.entries.map((entry) => {
        return (
          <div key={entry.id}>
            <a href={entry.link}>{entry.name}</a>
          </div>
        )
      })}
    </div>
  )
}

export default RecentEntries
