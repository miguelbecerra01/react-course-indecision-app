import React from 'react';
import Modal from 'react-modal';


//replaces the longone of arrow function
// const OptionModal = () => {
//     return (
//         <div>
//             some text
//         </div>
//     );
// };

//this is short because only returns 
/*
!!undefined
false
!!"asd"
true
*/

const OptionModal = (props) => (
    <Modal
        ariaHideApp={false}
        isOpen={props.isModalOpen}
        contentLabel="Selected Option"
        onRequestClose={props.handleCloseModal}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleCloseModal}>Okay!</button>
    </Modal>
);

export default OptionModal;