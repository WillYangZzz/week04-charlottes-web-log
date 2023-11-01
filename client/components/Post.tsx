import posts from '../data/posts'

function Post() {
  return (
    <>
      {posts.map((post) => (
        <>
          <h3 key={post.title}>{post.title}</h3>
          <h4 key={post.date}>{post.date}</h4>
          <p key={post.id}>{post.paragraphs.join(' ')}</p>
        </>
      ))}
    </>
  )
}

export default Post
