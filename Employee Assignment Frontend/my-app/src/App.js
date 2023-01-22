import Create from './components/create/Create';
import Read from './components/read/Read';
import {BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import { Button} from 'semantic-ui-react'
import image from "./backgroundimg.jpg"
import './App.css';

function App() {

  return (
    <>
      <div className='main' style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", 
    height:700,width:1500}}>
        <div>
          <h2>Employee Dashboard</h2>
        </div>
        <div className='bttn'> 
          <BrowserRouter>

            <Link to='/'>
              <Button color='blue'>Home</Button>
            </Link>
            <Link to='/Create'>
              <Button color='blue'>Employee form</Button>
            </Link>
       
            <Routes>
              <Route path='/Create' element={<Create />} />
              <Route path='/' element={<Read />} />
          
            </Routes>
          </BrowserRouter>
          </div>
      </div>
      </>
  );
}

export default App;
