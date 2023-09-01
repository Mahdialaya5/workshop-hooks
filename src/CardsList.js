import React from 'react'
import Card from './Card'

function CardsList({info}) {
  return (
   <div className='list'   >
  
  {info.map((el)=> <Card  el={el} />) }
   
    </div>
  )
}

export default CardsList