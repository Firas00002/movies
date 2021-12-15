import React from 'react'

const StarsRating = ({rating,handleRating}) => {
    const stars =(x)=>{
        let star=[];
        for (let i = 1; i <= 5; i++) {
           if(i<=x){
               star.push(<span onClick={()=>handleRating(i)} style={{color:'gold',fontSize:20,cursor:'pointer'}} >★</span>)
                   
               
           } else{star.push(<span onClick={()=>handleRating(i)} style={{color:'black',fontSize:20,cursor:'pointer'}}>★</span>)}
               
               
            }   
            return star
        }
    return (
        <div >
           {stars(rating)} 
        </div>
    )
}
StarsRating.defaultProps={
    handleRating:()=>{}
}
export default StarsRating
