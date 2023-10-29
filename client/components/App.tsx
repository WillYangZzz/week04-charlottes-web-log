import Header from './Header.tsx'
import Footer from './Footer.tsx'
import footerData from '../data/footer'
import headerData from '../data/header.ts'

function App() {
  return (
    <>
      <Header title={headerData.title} link={headerData.link} />
      <Footer copyright={footerData.copyright} author={footerData.author} />
    </>
  )
}

export default App
