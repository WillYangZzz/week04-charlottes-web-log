import recentEntriesData from '../data/recent-entries.ts'
import RecentEntry from './RecentEntry.tsx'

function RecentEntries() {
  return (
    <div className="entries">
      {recentEntriesData.map((recentEntries) => (
        <RecentEntry key={recentEntries.id} {...recentEntries} />
      ))}
    </div>
  )
}

export default RecentEntries
