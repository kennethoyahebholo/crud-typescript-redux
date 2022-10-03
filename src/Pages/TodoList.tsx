import {useEffect, useMemo, useState} from 'react'
import { useSelector } from 'react-redux';
import { State } from '../redux/global'
import PageTitle from "../Components/PageTitle"
import UserTodos from '../Components/UserTodos';
import './todoList.css'
import Header from '../Components/Header';
import { ITodoState } from '../redux/features/todoSlice';

const TodoList = () => {
  const userTodo = useSelector((state: State) => state.todo.todoList);
  const filterStatus = useSelector((state: State) => state.todo.filterStatus);
  const [sortedTodoList, setSortedTodoList] = useState<ITodoState[]>()

  useEffect(() => {
      const newTodoList = [...userTodo];
      newTodoList.sort((a, b) => new Date(b.time).valueOf() - new Date(a.time).valueOf());
  setSortedTodoList(newTodoList)
  }, [userTodo])


  const filteredTodoList = useMemo(() => {
  return sortedTodoList?.filter((item) => {
    if(filterStatus === 'all') {
      return true;
    }
    return item.status === filterStatus;
  })
  }, [filterStatus, sortedTodoList]) 
  return (
    <>
    <PageTitle className='page__title'>Todo List</PageTitle>
    <div className='todoList__container'>
     <Header className='header__con'/>  
      { filteredTodoList && filteredTodoList.length > 0? 
        <div className='todoList__wrapper'>
          {filteredTodoList.map(todo => {
            return(
              <UserTodos  key={todo.id} {...todo}/>          
            )
          })}
        </div> 
        : 
        <div className='noTodo_container'>
         <h4>No todos(Add your daily todo)</h4></div>
        }
    </div>     
    </>
  )
}

export default TodoList