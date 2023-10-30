interface Props {
  id: number
  blogTitle: string
  link: string
}

function OtherBlog(props: Props) {
  return (
    <div>
      <h2>{props.blogTitle}</h2>
      <h3>{props.link}</h3>
    </div>
  )
}

export default OtherBlog
