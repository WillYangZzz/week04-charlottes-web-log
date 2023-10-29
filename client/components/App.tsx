import header from '../data/header'
import footer from '../data/footer'

import Header from './Header'
import Footer from './Footer'
import Posts from './Posts'

function App() {
  return (
    <>
      <div className="container">
        <Header {...header} />
        <Posts />
        <Footer {...footer} />
      </div>
    </>
  )
}

export default App
