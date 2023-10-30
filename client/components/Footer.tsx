interface Props {
  copyright: number
  author: string
}

function Footer(props: Props) {
  return (
    <div className="footerClass">
      <p>
        {props.copyright}
        {props.author}
      </p>
    </div>
  )
}

export default Footer
