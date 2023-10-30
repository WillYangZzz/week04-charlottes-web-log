interface Props {
  title: string
  link: string
}

export default function Header(props: Props) {
  return (
    <div>
      {props.title} {props.link}
    </div>
  )
}
