import React from 'react'
import blogPostsData from '../data/other-blogs.ts'
import Blogpost from './Blogpost.tsx'

function Blogposts() {
  return (
    <div className="blogposts-container">
      <h2>Blogposts</h2>
      {blogPostsData.map((post) => (
        <Blogpost key={post.id} {...post} />
      ))}
    </div>
  )
}

export default Blogposts
