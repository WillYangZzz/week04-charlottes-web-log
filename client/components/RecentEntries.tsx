import RecentEntry from './RecentEntry'
import recentEntriesData from '../data/recent-entries'

function RecentEntries() {
  return (
    <>
      <div>
        <h2>Recent Entries</h2>
        {recentEntriesData.map((entry) => (
          <RecentEntry key={entry.id} {...entry} />
        ))}
      </div>
    </>
  )
}
export default RecentEntries
