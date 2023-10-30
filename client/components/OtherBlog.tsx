interface Props {
  id: number
  blogTitle: string
  link: string
}

function Blog(props: Props) {
  return (
    <div className="blogContainer">
      <h3>{props.blogTitle}</h3>
      <p>{props.link}</p>
      ...
    </div>
  )
}

export default Blog
