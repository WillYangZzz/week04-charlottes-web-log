interface Props {
  title: string
  link: string
}

function Header(props: Props) {
  return (
    <a href={props.link}>
      <h1>{props.title}</h1>
    </a>
  )
}

export default Header
