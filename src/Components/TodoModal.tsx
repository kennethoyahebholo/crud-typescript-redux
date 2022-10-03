import React,{ SetStateAction,Dispatch, useEffect  } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, ITodoState, updateTodo } from '../redux/features/todoSlice'
import Button from './Button/Button'
import Input from './Input/Input'
import "./TodoModal.css"
import { v4 as uuid } from "uuid"
import toast from 'react-hot-toast'

interface Props {
  type: string,
  modalOpen: boolean;
  Itodo: ITodoState;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const TodoModal = ({ type, modalOpen, Itodo, setModalOpen }: Props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("")
  const [todo, setTodo] = React.useState("")
   const [status, setStatus] = React.useState('incomplete')
  

   useEffect(()=>{
    if(type === 'update' && Itodo){
      setTitle(Itodo.title);
      setTodo(Itodo.todo);
      setStatus(Itodo.status)
    }else{
      setTitle('');
      setTodo('');
      setStatus('incomplete')
    }
   }, [type, Itodo, modalOpen] );


  const handleClose = () => {
  setModalOpen(false)
  }
  const handleSubmit = (e: any) => {
   e.preventDefault();
   if (title === ''){
    toast.error('Please enter title');

    return;
   }
   if(title && todo && status)
   {
    if(type === 'add') {
    dispatch(addTodo({
      id: uuid(),
      title,
      todo,
      status,
      time: new Date().toLocaleString(),
    }));
    toast.success('Task Added Successfully');    
    } else if(type === 'update')
    {
      if ( Itodo.title !== title || Itodo.todo !== todo || Itodo.status !== status )
      {
        dispatch(updateTodo({
          ...Itodo,
          title,
          status,
          todo,
        }))
        toast.success("Changes made successfully")
      }else {
        toast.error("No Changes made")
      }
    }
  setModalOpen(false)
    
   }else {
    toast.error("Fields should not be empty")
   }
  }
  return (
   <>
   { modalOpen && 
     <div className={type === 'update' ? 'wrappers' : 'wrapper'} >
     <div className='container'>      
      <form onSubmit={(e) => handleSubmit(e)}>
          <h5>{type === 'update' ? 'Update Todo' : 'Add Todo'} </h5>
          
          <Input label="Title" onChange={(e)=> {setTitle(e.target.value)}} value={title} className="input" type="text" name='title' placeholder='Title'/>

          <Input label="Todo" onChange={(e)=> {setTodo(e.target.value)}} value={todo} className="input" type="text" name='todo' placeholder='Todo'/>

          <label htmlFor='status'>
          Status
          </label>
          <select className='select__input_Modal' name='status' id='status' value={status} onChange={(e)=>{setStatus(e.target.value)}}>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
          </select>

          <br/>
          <br/>

          <div className='add_btn__con'>

          <Button className="action__btn" btnFunc={()=>{}} btnType="submit">{type === 'update' ? 'Update Todo' : 'Add Todo'}</Button>

          <Button className="close__btn" btnFunc={handleClose} btnType="button">Close</Button>

          </div>

          
      </form>
      <div onClick={handleClose} className='close_con'>
        X
      </div>
      </div>
    </div>
    }
    </>
    
  )
}

export default TodoModal