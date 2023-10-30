import Header from './Header.tsx'
import Footer from './Footer.tsx'

import headerData from '../data/header.ts'
import footerData from '../data/footer.ts'

function App() {
  return (
    <div>
      <Header title={headerData.title} link={headerData.link} />
      <Footer copyright={footerData.copyright} author={footerData.author} />
    </div>
  )
}

export default App
