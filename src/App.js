import { useState } from 'react';
import './App.css';
import Addmovie from './components/Addmovie';
import Moviecard from './components/Moviecard';
import MovieList from './components/MovieList';




function App() {
  

  const [state,setState] = useState ([
    {

     id:Math.random(),
     image: 'https://fr.web.img6.acsta.net/pictures/21/08/02/16/08/1706767.jpg', 
     title: "Lacasa de papel", 
     date:'1/12/1990',
     Rating:'2'
    
    },
    { 

      id:Math.random(),
     image: 'https://fr.web.img2.acsta.net/pictures/21/09/01/11/19/0900123.jpg', 
     title: "Venom 2", 
     date:'1/12/2000',
     Rating:1
    
    },
    {
      id:Math.random(),
     image: 'https://media.services.cinergy.ch/media/box1600/d9fdf11eeee914bf4ccf4e2410130e08aff7e120.jpg',
     title: "Fast & Furious 9",
     date:'1/12/2010',
     Rating:4
    },
    {
      id:Math.random(),
     image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Transporter_3_poster.jpg/220px-Transporter_3_poster.jpg',
     title: "Transporter 3", 
     date:'1/12/2002',
     Rating:3
    
    },
    { 
      id:Math.random(),
      image: 'https://fr.web.img3.acsta.net/medias/nmedia/18/35/62/65/18754165.jpg',
      title: "Spider-Man3",
      date:'1/12/3000',
      Rating:5
     },
     {
      id:Math.random(),
      image: 'https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg',
      title: "Inception",
      date:'1/12/1996',
      Rating:4
     }
    
]);

const [list, setList] = useState ('')
const handleadd=(newmovies)=>setState([...state,newmovies])
const [rating, setRating] = useState(1)
const handleRating=(x)=>setRating(x)
  return (
    <div className="App_container">
        
        <MovieList handleRating={handleRating} rating={rating} state={state} list={list} setList={setList} />
        
        <Addmovie add={handleadd} />
        <Moviecard state={state} list={list} /> 
        
    </div>
  );
}

export default App;
