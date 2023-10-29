import React from 'react'

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
      <h4>{props.date}</h4>
      <h5>Comments - {props.commentCount}</h5>
      <p>{props.paragraphs}</p>
    </div>
  )
}

export default Post
