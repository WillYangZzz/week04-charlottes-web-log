import otherBlogsData from '../data/other-blogs.ts'
import OtherBlog from './OtherBlog.tsx'

function OtherBlogs() {
  return (
    <div>
      <h2>Other Blogs</h2>
      {otherBlogsData.map((blog) => (
        <OtherBlog key={blog.id} {...blog} />
      ))}
    </div>
  )
}

export default OtherBlogs
