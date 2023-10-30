interface Props {
  id: number
  title: string
  date: string
  commentCount: number
  paragraphs: string[]
}

function Post(props: Props) {
  return (
    <div className="postClass">
      <h2>Title: {props.title}</h2>
      <h3>Date: {props.date}</h3>
      <p># of Comments: {props.commentCount}</p>
      <p>{props.paragraphs}</p>
    </div>
  )
}

export default Post
