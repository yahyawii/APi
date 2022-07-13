
import './App.css';
import ListUsers from './Components/ListUsers';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import { useState } from 'react';


function App() {
  const [auth,setAuth] = useState(false)
  return (
    <div>
         <h1>WS API</h1>
         <Home></Home>
        <ListUsers/> 
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Users' element={<PrivateRoute auth={auth}><ListUsers/></PrivateRoute>}/>
        </Routes>
    </div>
  );
}

export default App;
