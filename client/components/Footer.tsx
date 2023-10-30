interface Props {
  copyright: number
  author: string
}

export default function Footer(props: Props) {
  return (
    <div>
      {props.copyright} {props.author}
    </div>
  )
}
