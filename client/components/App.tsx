import Footer from './Footer.tsx'
import Header from './Header.tsx'
import Posts from './Posts.tsx'
import '../styles/main.css'
import Otherblogs from './OtherBlogs.tsx'
import RecentEntries from './RecentEntries.tsx'

function App() {
  return (
    <>
      <Header />
      <div className="posts">
        <RecentEntries />
        <Posts />
        <Otherblogs />
      </div>
      <Footer />
    </>
  )
}

export default App
