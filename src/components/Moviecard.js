/* eslint-disable array-callback-return */
import React from 'react'
import './Movie.css';
import StarsRating from './StarsRating';
const Moviecard = ({state,list,rating}) => {
    
    
    
    return (
        
        <div>
            {state.filter(x=>(x.title.toLowerCase().includes(list.toLowerCase()) && x.Rating>=rating )).map((el,i) => <article key={i} className='movie-card'>
               <a href={el.lien}> <img

                    src={el.image}

                    alt={el.title}

                /> </a>

                <div>
                    <h3>{el.title}</h3>
                    <p>{el.date}</p>
                    <StarsRating rating={el.Rating}/>
                </div>


            </article>)}




        </div> 
    )
}

export default Moviecard