import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import TodoList from './Pages/TodoList';
import { Toaster } from 'react-hot-toast'


function App() { 
  return (
    <>
    <section className='app__body'>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<TodoList/>} />
      </Routes>
      <Toaster 
      position='bottom-right'
      toastOptions={{
        style: {
          fontSize: '.8rem',
        }
      }}/>  
    </BrowserRouter>  
    </section>        
    </>
    
  );
}

export default App;
