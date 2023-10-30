interface Props {
  id: number
  blogTitle: string
  link: string
}

function OtherBlog(props: Props) {
  const blogLink = props.link
  return (
    <div>
      <h2>{props.blogTitle}</h2>
      <a href={blogLink}>Check out this other blog</a>
    </div>
  )
}

export default OtherBlog
