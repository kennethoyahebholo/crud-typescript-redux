import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { State } from '../redux/global';
import Button from './Button/Button';
import { SelectButton } from "./Button/Button"
import TodoModal from "./TodoModal"
import './header.css'
import { updateFilterStatus } from '../redux/features/todoSlice';

type Props = {
	className: string;
};

const Header: React.FC<Props> = ( {className} ) => {
 const dispatch = useDispatch();
  const initialFilterStatus = useSelector((state: State) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = React.useState(initialFilterStatus)
  const [modalOpen, setModalOpen] = React.useState(false)

  const state = {
    id: "",
    title: "",
    todo: "",
    time: "",
    status: "",
}

  const handleShow = () => {
   setModalOpen(true)
  }

  const updateFilter = (e: any) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value))
  }
  return (
    <>
    <div className=''>
     <div className={className}>
      <Button btnFunc={handleShow} btnType="button" className="Sbtn">Add Todo</Button>
      <SelectButton value={initialFilterStatus} 
      onChange={(e: any)=> updateFilter(e)}
      className="select__input" btnFunc={function (event: React.MouseEvent<Element, MouseEvent>): void {
       throw new Error('Function not implemented.');
      } } id={0}>
       <option value="all">ALL</option>
       <option value="incomplete">Incomplete</option>
       <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal  modalOpen={modalOpen} setModalOpen={setModalOpen} type="add" Itodo={state}></TodoModal>
     </div>  
    </div>
    </>
  )
}

export default Header