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
      <h3>{props.title}</h3>
      <h4>{props.date}</h4>
      <p>Comment Count: {props.commentCount}</p>
      {props.paragraphs.map((paragraph) => (
        <p key={props.id}>{paragraph}</p>
      ))}
    </>
  )
}

export default Post
