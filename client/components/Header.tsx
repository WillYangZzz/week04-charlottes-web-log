interface Props {
  title: string
  link: string
}

function Header(props: Props) {
  return (
    <div className="headerClass">
      <p>
        <a href={props.link}>{props.title}</a>
      </p>
    </div>
  )
}

export default Header
