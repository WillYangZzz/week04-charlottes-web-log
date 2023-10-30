interface Props {
  copyright: number
  author: string
}

function Footer(props: Props) {
  return (
    <footer className="footer">
      {props.copyright} {props.author}
    </footer>
  )
}

export default Footer
