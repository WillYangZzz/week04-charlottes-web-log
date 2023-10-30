import header from '../data/header'
import footer from '../data/footer'

import Header from './Header'
import Footer from './Footer'
import Posts from './Posts'
import OtherBlogs from './OtherBlogs'
import RecentEntries from './RecentEntries'

function App() {
  return (
    <>
      <div className="container">
        <Header {...header} />

        <div className="main-container">
          <OtherBlogs />
          <Posts />
          <RecentEntries />
        </div>

        <Footer {...footer} />
      </div>
    </>
  )
}

export default App
