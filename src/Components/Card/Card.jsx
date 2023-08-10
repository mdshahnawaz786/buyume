import React from 'react'

const Card = ({post}) => {
  return (
    <div>
        <div className="mapContainer">
                    <h2>Id: {post.id}</h2>
                    <h3>User Id: {post.userId}</h3>
                    <h4>Title: {post.title}</h4>
                    <h5>Body: {post.body}</h5>
                  </div>
    </div>
  )
}

export default Card