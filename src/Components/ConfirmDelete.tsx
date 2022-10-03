import React from 'react'
import './ConfirmDelete.css'

interface Props {
 closeDeleteModal: React.MouseEventHandler<HTMLButtonElement>;
 handelDelete: React.MouseEventHandler<HTMLButtonElement>
}

const ConfirmDelete = ({closeDeleteModal, handelDelete}: Props) => {
  return (
    <div className='delete_wrapper'>
     <div className="delete_container">
       <h5>Please confirm delete</h5>
       <div className='btn_con'>
        <button className='btn__green' type='button' onClick={closeDeleteModal}>Abort</button>
        <button className='btn__red' type='button' onClick={handelDelete}>Delete</button>        
       </div>
     </div>
    </div>
  )
}

export default ConfirmDelete