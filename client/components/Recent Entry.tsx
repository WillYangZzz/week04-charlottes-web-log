import recentEntries from '../data/recent-entries'

function RecentEntry() {
  return (
    <>
      {recentEntries.map((entry) => (
        <>
          <div className="blog-container">
            <a className="blog" href={entry.link} key={entry.name}>
              {entry.name}
            </a>
          </div>
        </>
      ))}
    </>
  )
}

export default RecentEntry
