import React from 'react'
import data from '../data/footer'

interface Props {
  copyright: number
  author: string
}
function Footer(props: Props) {
  return (
    <div>
      <p>{props.copyright}</p>
      <p>{props.author}</p>
    </div>
  )
}

export default Footer
