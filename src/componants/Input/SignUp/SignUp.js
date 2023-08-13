
import './SignUp.css'
import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import { createNewUser, checkIfUserExistInDb, saveCurrentUser} from '../../../services/utils'




// exple pour ajouter utlisateur
// const response = createNewUser({
//     firstname: 'bah',
//     lastname: 'amadou',
//     pseudo: 'ab12',
//     year: 32,
//     phone: '0202020202',
//     email: 'abah@gmail.com',
//     password: 'root',
// })

const user = {
  firstname: '',
  lastname: '',
  pseudo: '',
  year: 0,
  phone: '',
  email: '',
  password: '',
}


const SignUp = () =>{

  const navigate =  useNavigate()

 const [newUser, setNewUser] = useState(user);
 const [error, setError] = useState({status: false, msg: ''});

 

const handleChange = (e) =>{
  setNewUser({...newUser, [e.target.id]: e.target.value})
}

const {firstname, lastname, pseudo, phone, year, email, password, confirmpassword} = newUser




const handleSubmit = (e) => {
  e.preventDefault();
  if(checkIfUserExistInDb(newUser.email)){
    setError({status: true, msg: 'Ce email existe deja'})
  }else{
    // tu verifie si tous les champs sont remplis alors tu appel la fonction createNewUser
    if(newUser.firstname !== '' || newUser.lastname !== '' || newUser.pseudo !== '' || newUser.email !== '' || newUser.phone !== '' || newUser.password !== '' || newUser.password === newUser.confirmpassword || newUser.year > 0){
     
     const createUserFunction = createNewUser(newUser) 

     if (createUserFunction) {
      saveCurrentUser(newUser.email);
      navigate('/welcome');
      setError({ status: false, msg: '' });
    } else {
      setError({ status: true, msg: 'La création de l\'utilisateur a échoué' });
    }
   
   }else{
      // s'il ya un champ non remplis alors tu appel error et tu ajoute le message que tu veux
      error({status: true , msg: ''})
    }
  }
}


 
const btn =   firstname === '' || lastname === '' || pseudo === '' || email === '' || phone === '' || password === '' || password !== confirmpassword || year <= 0
? <button className='btnSignup' disabled >inscription</button> : <button>inscription</button>


return ( 
  <div>
    
        <>
        <div >
        <h1> SignUp </h1>
        <form onSubmit={handleSubmit}>  
        <div className='formContain'>
        <div>
        <label htmlFor="firstname" > Prénom</label><br />
        <input className='InputsignUp' onChange={handleChange} value={firstname} type="text" id="firstname" autoComplete='off'  required/>
        </div>
         <div>
        <label htmlFor="lastname">Nom</label><br />
        <input className='InputsignUp' onChange={handleChange} value={lastname} type="text" id="lastname" autoComplete='off' required/><br/>
        </div>
        </div>
    
        <div className='formContain'>
        <div>
        <label htmlFor="pseudo" >Pseudo </label><br />
        <input className='InputsignUp' onChange={handleChange} value={pseudo}  type="text"  id="pseudo" autoComplete='off' required/>
        </div>
        <div>
        <label htmlFor="email" >Email </label><br />
        <input className='InputsignUp' onChange={handleChange} value={email} type="email"  id="email" autoComplete='off' required /><br />
        </div>
        </div>
        <div className='formContain'>
        <div>
        <label htmlFor="phone">Téléphone </label> <br />
        <input className='InputsignUp' onChange={handleChange} value={phone} type="phone"  id="phone" autoComplete='off' required/>
        </div>
        <div>
        <label htmlFor="year" >Âge </label><br />
        <input className='InputsignUp' onChange={handleChange} value={year} type="number"  id="year" autoComplete='off' required /><br/>
        </div>
        </div>
        <div className='formContain'>
        <div>
        <label htmlFor="password" >password </label><br />
        <input className='InputsignUp' onChange={handleChange} value={password} type="password"  id="password" autoComplete='off' required/>
        </div>
        <div>
        <label htmlFor='confirmpassword'>Confirm password </label><br />
        <input className='InputsignUp' onChange={handleChange} value={confirmpassword} type="password"  id="confirmpassword" autoComplete='off' required/><br/>
        </div>
        </div>
        
        <div className='formContain'>
           
          
      
          {btn}
        
        <Link  to='/login'><input className='btn' type="submit" value="deja inscrit"/></Link>
        
        </div>
    
    </form>
    </div>
</>

</div>

)
}


export default SignUp

