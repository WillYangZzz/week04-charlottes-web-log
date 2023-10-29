interface Props {
  copyright: number
  author: string
}

function Header(props: Props) {
  return (
    <p className="copyright">
      Copyright
      {props.copyright}
      {props.author}
    </p>
  )
}

export default Header
