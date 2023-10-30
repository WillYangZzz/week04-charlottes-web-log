import Footer from './Footer.tsx'
import Header from './Header.tsx'
import Posts from './Posts.tsx'
import '../styles/main.css'
import Otherblogs from './OtherBlogs.tsx'

function App() {
  return (
    <>
      <Header />
      <div className="posts">
        <Posts />
        <Otherblogs />
      </div>
      <Footer />
    </>
  )
}

export default App
