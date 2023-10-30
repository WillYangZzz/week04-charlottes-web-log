import otherBlogData from '../data/other-blogs.js'
import Blog from './OtherBlog.js'

function Blogs() {
  return (
    <div className="otherBlogsClass">
      <div>
        <h2>Other Blogs</h2>
      </div>
      {otherBlogData.map((blog) => (
        <Blog key={blog.id} {...blog} />
      ))}
    </div>
  )
}
export default Blogs
