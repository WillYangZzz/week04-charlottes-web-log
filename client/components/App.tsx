import Footer from './Footer'
import Header from './Header'
import OtherBlogs from './OtherBlogs'
import Posts from './Posts'
import RecentEntries from './RecentEntries'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <OtherBlogs />
        <Posts />
        <RecentEntries />
      </div>
      <Footer />
    </>
  )
}

export default App
