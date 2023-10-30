import Posts from './Posts'
import Header from './Header'
import Footer from './Footer'
import Blogposts from './Blogposts'
import RecentEntries from './RecentEntries'

function App() {
  return (
    <>
      <Header />
      <h1>The future home of Charlotte&apos;s web log!</h1>
      <div className="row">
        <div className="column2">
          <Blogposts />
        </div>
        <div className="column1">
          <Posts />
        </div>
        <div className="column3">
          <RecentEntries />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
