import './App.css';
import CardsList from './CardsList';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './NavBar';
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating'
import arr from "./data"

function App() {

const [Data, setData] = useState(arr)
const [rating, setRating] = useState(0)
const [search, setsearch] = useState("")

     const handleRating = (rate) => {
        setRating(rate)
      }

function add(title,description,rating){
setData([...Data,{title:title,description:description,rating:rating}])
}


  return (
    <div className="App">
      <NavBar  add={add}   />
      <input placeholder='search app' onChange={(e)=>setsearch(e.target.value)} />
      <Rating onClick={handleRating}  />
    <CardsList  info={Data.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase())&&el.rating==rating)} />   
    </div>
  );
}

export default App;
