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
    <>
      <Header title={headerData.title} link={headerData.link} />
      <Posts posts={postData} />
      <OtherBlogs blogs={blogData} />
      <RecentEntries entries={recentData} />
      <Footer copyright={footerData.copyright} author={footerData.author} />
    </>
  )
}

export default App
