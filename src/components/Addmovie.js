import React, { useState } from 'react'
import Modal from 'react-modal';
import StarsRating from './StarsRating';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  

  Modal.setAppElement('#root');
  
const Addmovie = ({add}) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [image, setImage] = useState('')
  const [Rating, setRating] = useState('1')
const [modalIsOpen, setIsOpen] = React.useState (false);
    function openModal() {
        setIsOpen(true);
      }
    
      
    
      function closeModal() {
        setIsOpen(false);
      }

      const handleRating=(x)=>setRating(x)

      const submit=(e)=>{
      e.preventDefault();
      const newMovies={
       id:Math.random(),
        title,
        date,
        Rating,
        image,
        
      }
      add(newMovies);
      closeModal()
      }

    return (
        <div>
          
            
          <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
         <form onSubmit={submit}>
           <label>Title</label>
         <input value={title} type='text' onChange={(e)=>setTitle(e.target.value)} required></input>    
         <label >Date</label>
         <input value={date} type='date' onChange={(e)=>setDate(e.target.value)} required></input>   
         <label>img</label>
         <input value={image} type='url' onChange={(e)=>setImage(e.target.value)} required></input>   
         <label>Rating</label>
         <StarsRating handleRating={handleRating} rating={Rating} />
         <button type='sumbit'>confirm</button>
         <button>cancel</button>
         </form>
         
      </Modal>
        
        </div>
    )
}

export default Addmovie