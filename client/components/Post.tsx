interface Props {
  id: number
  title: string
  date: string
  commentCount: number
  paragraphs: string[]
}

function Post(props: Props) {
  return (
    <>
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
      <p>Comment Count: {props.commentCount}</p>
      {props.paragraphs.map((paragraph) => (
        <p key={props.id}>{paragraph}</p>
      ))}
    </>
  )
}

export default Post
