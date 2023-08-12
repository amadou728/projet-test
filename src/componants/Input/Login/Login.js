import './login.css'
import React, { useState } from 'react';
import { users } from '../../../data';
import Welcome from '../../Welcome/Welcome';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  

  const handleLogin = (email, password) => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      setLoggedIn(true);
      setUser(foundUser);
    } else {
      alert('Identifiants incorrects. Veuillez réessayer.');
    }
  };

  

  return (
    <div>
      {loggedIn ? (
        
        <div>
          
          <Welcome />
        </div>
      ) : (
        <div>
          <h2>Connexion</h2>
          <form className='formLogin'
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              const password = e.target.password.value;
              handleLogin(email, password);
            }}
          > 
          <div className='formContaint'>
             <div>
             <label>Email</label>
             </div>
             <div>
             <input className='inputLogin' type="text" name="email" />
             </div>
          </div>

           <div className='formContaint'>

            <div>
            <label>Mot de passe</label>
            </div>
            <div>
            <input className='inputLogin' type="password" name="password"  />
            </div>
            </div>
            <div >
            <button className='btnLogin' type="submit">Se connecter</button>
           </div>
          </form>
          <Link><p>mot de passe oublier ?</p></Link>
          <Link to='/signup'><p>inscrivez-vous</p></Link>
        </div>
      )}
    </div>
  );
};

export default Login;
