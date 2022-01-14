import React, { useState } from 'react';
import Modal from 'react-modal';
import App from '../../App';

import Rate from '../Rate';

import './AddMovie.css';

Modal.setAppElement('#root');

const AddMovie = ({addMovie}) => {
  
  const [modalIsOpen, setIsOpen] = useState(false);
  //on passe a creer les state de notre movie jdida
  const [nameInput,setNameInput]=useState('')
//la fonction est tjr endessous du state , a noter state est tjr en firt place
const openModal = () => {
  setIsOpen(true);
};

const closeModal = () => {
  setIsOpen(false);
};

//mainteant nous pouvons rien ecrire dans le modal car on n'a pas fait de e.target.value
//ici new objet qui recoit e reste du travail et la fucntion ainsi qu'un retour a lariere
const handelsubmit=()=>{
 let newMovie={
  nameInput
 }
 addMovie(newMovie);
// ici on passe la focnton du Appjs et on lui passe le nouvel objet
setNameInput('');
setIsOpen(false);
}



//jusqu'ici nous avons la partie du open et close modal 
  return (
    <div>
      <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
          +
        </button>
        <Modal
          className="add-modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <h1 className="addMovie-h1">Add A Movie</h1>
          <form>
            <label>Movie Name</label>
            <input
              type="text"
              name="name"
              value={nameInput}
              required
              onChange={e=>setNameInput(e.target.value)}
            />
           
          </form>
          {/* //ici la function de l'ajout */}
          <button className="Modal-btn" onClick={handelsubmit} >
            Submit
          </button>
          <button className="Modal-btn" onClick={closeModal}>
            close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default AddMovie;
