import blogData from '../data/other-blogs.ts'
import Blog from './OtherBlog.tsx'

function Blogs() {
  return (
    <div className="blogs">
      {blogData.map((blog) => (
        <Blog key={blog.id} {...blog} />
      ))}
    </div>
  )
}

export default Blogs
