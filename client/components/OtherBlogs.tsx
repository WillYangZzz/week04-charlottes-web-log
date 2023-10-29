interface Blog {
  id: number
  blogTitle: string
  link: string
}
interface Props {
  blogs: Blog[]
}

function OtherBlogs(props: Props) {
  return (
    <div>
      {props.blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <a href={blog.link}>{blog.blogTitle}</a>
          </div>
        )
      })}
    </div>
  )
}

export default OtherBlogs
