import React from 'react'
import { Rating } from 'react-simple-star-rating'

function Card({el}) {
  return (
<div className="card" style={{width:" 18rem"}}>
  <img src={el.posterUrl} class="card-img-top" alt="photo"/>
  <div className="card-body">
    <h5 className="card-title">{el.title}</h5>
    <p class="card-text">{el.description}</p>
    <Rating iconsCount={5} readonly={true} initialValue={el.rating} />
  </div>
</div>
  )
}

export default Card