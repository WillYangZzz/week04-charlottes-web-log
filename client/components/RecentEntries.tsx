import React from 'react'
import recentEntriesData from '../data/recent-entries.ts'
import RecentEntry from './RecentEntry.tsx'

function RecentEntries() {
  return (
    <div className="recentEntries-Container">
      <h2>Recent Entries</h2>
      {recentEntriesData.map((entry) => (
        <RecentEntry key={entry.id} {...entry} />
      ))}
    </div>
  )
}

export default RecentEntries
