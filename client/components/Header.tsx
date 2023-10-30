interface Props {
  title: string
  link: string
}

export default function Header(props: Props) {
  return (
    <div className="header">
      <h1>
        {props.title} {props.link}
      </h1>
    </div>
  )
}
