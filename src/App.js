import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './componants/Home/Home';
import Login from './componants/Input/Login/Login';
import SignUp from './componants/Input/SignUp/SignUp';
import ErrorPage from './componants/Input/Errorpage/ErrorPage';
import Welcome  from './componants/Welcome/Welcome'
import {checkIfUserExistInDb} from './services/utils'

function App() {
console.log(checkIfUserExistInDb("addbah@gmail.com"));
  return (
    
   <Routes>
    
      <Route path='' element={<Home />} />
       
      <Route path='welcome' element={<Welcome />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*'  element={<ErrorPage />} />
      
     </Routes>
     
  );
}

export default App;
