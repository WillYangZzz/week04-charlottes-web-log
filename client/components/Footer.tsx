import React from 'react'
import footerData from '../data/footer.ts'
function Footer() {
  return (
    <>
      <footer>
        <p>Copyright: {footerData.copyright}</p>
        <p>{footerData.author}</p>
      </footer>
    </>
  )
}

export default Footer
