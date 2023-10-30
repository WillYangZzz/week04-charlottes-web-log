import React from 'react'

interface Props {
  id: number
  blogTitle: string
  link: string
}

function Blogpost(props: Props) {
  return (
    <div className="blogpost">
      <a href={props.link}>
        <h3>{props.blogTitle}</h3>
      </a>
    </div>
  )
}

export default Blogpost
