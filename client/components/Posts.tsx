import postData from '../data/posts.ts'
import Post from './Post.tsx'

function Posts() {
  return (
    <div className="posts">
      {postData.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}

export default Posts
