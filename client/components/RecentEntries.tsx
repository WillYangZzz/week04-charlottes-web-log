import data from '../data/recent-entries.ts'
import RecentEntry from './RecentEntry.tsx'

function RecentEntries() {
  return (
    <div>
      {data.map((entries) => (
        <RecentEntry key={entries.id} {...entries} />
      ))}
    </div>
  )
}
export default RecentEntries
