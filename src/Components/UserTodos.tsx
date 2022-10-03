import React, {  useState } from 'react'
import { deleteTodo } from "../redux/features/todoSlice"
import { useDispatch } from 'react-redux';
import { ITodoState } from '../redux/features/todoSlice'
import toast from 'react-hot-toast'
import TodoModal from './TodoModal';

import './userTodo.css'

// importing icons from images directory
import deleteIcon from '../assets/images/trash.png'
import editIcon from '../assets/images/edit.png'
import ConfirmDelete from './ConfirmDelete';

const UserTodos = (state: ITodoState) => {

   const [updateModal, setUpdateModal] = useState(false)
   const [selectedTodo, setSelectedTodo] = useState<ITodoState>({
      id: "",
      title: "",
      todo: "",
      time: "",
      status: "",
   });
const [confirmDelete, setConfirmDelete] = useState(false)


   const dispatch = useDispatch()

   const handelDeleteTodo = () => {
      dispatch(deleteTodo(state.id))
      toast.success('Todo Deleted Successfully')
      setConfirmDelete(false)
   }

   const updateTodos = (todo : ITodoState) => {
      setSelectedTodo(todo)
      setUpdateModal(true)
   }


   const closeDeleteModal = () => {
      setConfirmDelete(false)
   }

   const openDeleteModal = () => {
      setConfirmDelete(true)
   }

  return (
       <>
         <div className='main__container'>
            <div className={state.status === 'complete' ? 'userTodo__container_complete' : 'userTodo__container_incomplete'}>
            
            <div className='userTodo__leftCon'>
               <div className="todoTitle_con">
                  <h4 className={state.status === 'complete'? 'underline_text' : ''}>
                  {state.title}
                  </h4>
               </div>            
               <div className="todoText_con">
                  <p className={state.status === 'complete'? 'underline_text' : ''}>
                  {state.todo}
                  </p>
               </div>
               <p>
                  {state.time}
               </p>         
            </div>

            <div className='list_btn_con'>               
               <button className='list_btn' onKeyDown={openDeleteModal} onClick={openDeleteModal} tabIndex={0}><img src={deleteIcon} alt="" />Delete</button>
               <button className='list_btn' onKeyDown={() => updateTodos(state)} onClick={() => updateTodos(state)} tabIndex={0}><img src={editIcon} alt="" />Edit</button>                        
            </div>                        
         </div>
         </div>         
         <TodoModal Itodo={selectedTodo} type="update" setModalOpen={setUpdateModal} modalOpen={updateModal}/>
         {confirmDelete && <ConfirmDelete handelDelete={handelDeleteTodo} closeDeleteModal={closeDeleteModal}/> }
      </>               
  )
}

export default UserTodos