import footerData from '../data/footer.ts'

function Footer() {
  return (
    <p>
      {footerData.author} {footerData.copyright}
    </p>
  )
}

export default Footer
