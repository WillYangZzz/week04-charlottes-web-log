import otherBlogs from '../data/other-blogs.ts'
import OtherBlog from './OtherBlog.tsx'

function Otherblogs() {
  return (
    <div>
      {otherBlogs.map((blogs) => (
        <OtherBlog key={blogs.id} {...blogs} />
      ))}
    </div>
  )
}

export default Otherblogs
