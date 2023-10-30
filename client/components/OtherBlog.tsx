interface Props {
  id: number
  blogTitle: string
  link: string
}

function Blog(props: Props) {
  return (
    <div className="blogContainer">
      <a href={props.link}>
        <h3>{props.blogTitle}</h3>
      </a>
      ...
    </div>
  )
}

export default Blog
