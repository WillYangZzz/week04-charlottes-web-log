import Footer from './Footer'
import Header from './Header'
import OtherBlogs from './OtherBlogs'
import Posts from './Posts'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <OtherBlogs />
        <Posts />
      </div>
      <Footer />
    </>
  )
}

export default App
