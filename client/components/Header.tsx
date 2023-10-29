import React from 'react'
import headerData from '../data/header.ts'

function Header() {
  return (
    <>
      <a href={headerData.link}>
        <header>{headerData.title}</header>
      </a>
    </>
  )
}

export default Header
