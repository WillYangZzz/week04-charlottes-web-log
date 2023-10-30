// build a container here

interface Props {
  id: number
  title: string
  date: string
  commentCount: number
  paragraphs: string[]
}

function Post(props: Props) {
  return (
    <div className="postContainer">
      <h3>{props.title}</h3>
      <div>
        <p>{props.date}</p>
        <p>{props.commentCount}</p>
        <p>{props.paragraphs}</p>
      </div>
      ...
    </div>
  )
}

export default Post
