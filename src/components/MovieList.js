import React from 'react'
import StarsRating from './StarsRating'

const MovieList = ({list,setList,rating,handleRating}) => {
    
    return (
        <div>
            <h5>Search</h5>
            <input value= {list} placeholder='Search here ...' onChange={(event)=>setList(event.target.value)} ></input>
            <StarsRating handleRating={handleRating} rating={rating}/>
            
        </div>
    )
}

export default MovieList