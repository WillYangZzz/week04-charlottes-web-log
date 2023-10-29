import header from '../data/header'
import footer from '../data/footer'

import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <>
      <div className="container">
        <Header {...header} />
        <Footer {...footer} />
      </div>
    </>
  )
}

export default App
