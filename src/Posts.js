import React from 'react'
import './Posts.css'

const Posts = ( {PostToRender} ) => { return (
  <ul>
    {PostToRender.map( (post, index) => (
      <li key={index}>
        <p> <b>Title :</b> {post.title}</p>
        <p> <b>Body :</b> {post.body}</p>
        <hr />
      </li>
    ) )}
  </ul>
)}

export default Posts