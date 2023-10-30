interface Props {
  copyright: number
  author: string
}

export default function Footer(props: Props) {
  return (
    <div className="footer">
      <p>
        {props.copyright} {props.author}
      </p>
    </div>
  )
}
