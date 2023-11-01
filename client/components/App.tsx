import Footer from './Footer'
import Header from './Header'
import Posts from './Posts'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Posts />
      </div>
      <Footer />
    </>
  )
}

export default App
