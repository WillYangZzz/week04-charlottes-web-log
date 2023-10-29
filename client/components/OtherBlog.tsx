interface Props {
  id: number
  blogTitle: string
  link: string
}

function OtherBlog(props: Props) {
  return (
    <>
      <a href={props.link}>
        <h3>{props.blogTitle}</h3>
      </a>
    </>
  )
}

export default OtherBlog
