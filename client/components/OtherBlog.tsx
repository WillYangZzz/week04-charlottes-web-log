import otherBlogs from '../data/other-blogs'

function OtherBlog() {
  return (
    <>
      {otherBlogs.map((blog) => (
        <>
          <div className="blog-container">
            <a className="blog" href={blog.link} key={blog.blogTitle}>
              {blog.blogTitle}
            </a>
          </div>
        </>
      ))}
    </>
  )
}

export default OtherBlog
