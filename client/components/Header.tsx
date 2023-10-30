import React from 'react'

interface Props {
  title: string
  link: string
}
function Header(props: Props) {
  return (
    <div className="header">
      <p>{props.title}</p>
      <p>{props.link}</p>
    </div>
  )
}

export default Header
