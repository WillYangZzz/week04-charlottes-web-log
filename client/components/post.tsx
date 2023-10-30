import postData from '../data/posts.ts'
import Post from './Posts.tsx'

function Posts() {
  return (
    <div className="postsClass">
      {postData.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}
export default Posts
