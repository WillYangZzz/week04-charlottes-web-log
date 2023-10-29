import Footer from './Footer'
import Header from './Header'

function App() {
  return (
    <div>
      <h1>The future home of Charlotte&apos;s web log!</h1>
      <Header />
      <Footer copyright={1980} author={'E. B. White'} />
    </div>
  )
}

export default App
