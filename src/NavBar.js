import React, { useState } from 'react'

function NavBar({add}) {

const [title, settitle] = useState("")
const [description, setdescription] = useState("")
const [rating, setrating] = useState("")


 const handleClick=()=>{
  add(title,description,rating)
}
  

  return ( 
    <div  className='navBar' >
      <label>title</label>
        <input onChange={(e)=>settitle(e.target.value)} />
        <label>des</label>
        <input  onChange={(e)=>setdescription(e.target.value)}  />
        <label>rating</label>
        <input type='number' max={5} onChange={(e)=>setrating(e.target.value)} />

   <button onClick={()=>handleClick()} >save  </button> 
   <div>
        
        </div>  
    </div>
  )
}

export default NavBar