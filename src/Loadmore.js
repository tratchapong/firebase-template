import React, {useState, useEffect} from 'react'
import posts from './database/postsArray'
import Posts from './Posts'

const postPerPage = 3
let holdingPosts = []

function Loadmore() {
  const [postToShow, setPostToShow] = useState([])
  const [next, setNext] = useState(3)

  const loopWithSlice = (start, end) => {
    const slicePosts = posts.slice(start,end)
    holdingPosts = [ ...holdingPosts, ...slicePosts]
    setPostToShow(holdingPosts)
  }

  useEffect( () => {
    loopWithSlice(0, postPerPage)
  }, []) 

  const showMorePosts = () => {
    loopWithSlice(next, next+postPerPage)
    setNext(next + postPerPage)
  }
  return (
    <div>
      <Posts PostToRender={postToShow} />
      <button onClick={showMorePosts}>ดูเพิ่ม..</button>
    </div>
  )
}

export default Loadmore
