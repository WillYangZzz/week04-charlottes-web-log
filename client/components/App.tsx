import Header from './Header.tsx'
import Footer from './Footer.tsx'
import Posts from './Posts.tsx'
import OtherBlogs from './OtherBlogs.tsx'
import RecentEntries from './RecentEntries.tsx'

import footerData from '../data/footer'
import headerData from '../data/header.ts'
import postData from '../data/posts.ts'
import blogData from '../data/other-blogs.ts'
import recentData from '../data/recent-entries.ts'

function App() {
  return (
    <div className="center">
      <Header title={headerData.title} link={headerData.link} />
      <div className="container">
        <OtherBlogs blogs={blogData} />
        <Posts posts={postData} />
        <RecentEntries entries={recentData} />
      </div>

      <Footer copyright={footerData.copyright} author={footerData.author} />
    </div>
  )
}

export default App
