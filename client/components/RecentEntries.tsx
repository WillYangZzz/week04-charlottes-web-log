import recentEntryData from '../data/recent-entries.js'
import Entries from './RecentEntry.js'

function Recent() {
  return (
    <div className="enteriesClass">
      <div>
        <h2>Recent enteries</h2>
      </div>
      {recentEntryData.map((entry) => (
        <Entries key={entry.id} {...entry} />
      ))}
    </div>
  )
}
export default Recent
