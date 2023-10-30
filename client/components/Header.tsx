interface Props {
  title: string
  link: string
}

function Header(props: Props) {
  return (
    <h1 className="header-title ">
      <a href={props.link}>{props.title}</a>
    </h1>
  )
}

export default Header
