import Header from './Header.tsx'
import headerData from '../data/header.ts'

import Footer from './Footer.tsx'
import footerData from '../data/footer.ts'

import Posts from './post.tsx'
import Blogs from './OtherBlogs.tsx'
import RecentEntries from './RecentEntries.tsx'

function App() {
  return (
    <>
      <Header title={headerData.title} link={headerData.link} />
      <Posts />
      <div className="container">
        <Blogs />
      </div>

      <RecentEntries />
      <Footer copyright={footerData.copyright} author={footerData.author} />
    </>
  )
}

export default App
