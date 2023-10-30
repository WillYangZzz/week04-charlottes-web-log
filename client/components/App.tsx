import Footer from './Footer.tsx'
import Header from './Header.tsx'
import Posts from './Posts.tsx'
import Otherblogs from './OtherBlogs.tsx'
import RecentEntries from './RecentEntries.tsx'

function App() {
  return (
    <>
      <img
        className="spin"
        src="../../charlottes-web.png"
        alt="supposed to spin"
      />
      <div className="center">
        <Header />
      </div>
      <div className="posts">
        <RecentEntries />
        <Posts />
        <Otherblogs />
      </div>
      <div className="center">
        <Footer />
      </div>
    </>
  )
}

export default App
