import header from '../data/header'
import footer from '../data/footer'

import Header from './Header'
import Footer from './Footer'
import Posts from './Posts'
import OtherBlogs from './OtherBlogs'

function App() {
  return (
    <>
      <div className="container">
        <Header {...header} />

        <div className="main-container">
          <OtherBlogs />
          <Posts />
          <h2> recent entries</h2>
        </div>

        <Footer {...footer} />
      </div>
    </>
  )
}

export default App
