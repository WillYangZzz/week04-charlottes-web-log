interface Props {
  id: number
  blogTitle: string
  link: string
}

function Blogs(props: Props) {
  return (
    <div className="blogsClass">
      <h3>
        Title:<a href={props.link}>{props.blogTitle}</a>
      </h3>
    </div>
  )
}

export default Blogs
