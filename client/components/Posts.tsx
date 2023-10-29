interface Post {
  id: number
  title: string
  date: string
  commentCount: number
  paragraphs: string[]
}

interface Props {
  posts: Post[]
}

function Post(props: Post) {
  return (
    <div>
      <h3>{props.title}</h3>
      <em>{props.date}</em>
      <p>{props.commentCount} comments</p>
      {props.paragraphs.map((ps, i) => {
        return <p key={i}>{ps}</p>
      })}
    </div>
  )
}

function Posts(props: Props) {
  return (
    <div>
      {props.posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}

export default Posts
