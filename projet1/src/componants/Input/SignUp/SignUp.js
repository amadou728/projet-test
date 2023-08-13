
import './SignUp.css'
import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { users } from "../../../data"
import Welcome from "../../Welcome/Welcome"


const SignUp = () =>{


const [firstName, setfirstName] = useState('')
const [lastName, setlastName] = useState('')
const [pseudo, setpseudo] = useState('')
const [phone, setphone] = useState('')
const [year, setyear] = useState('')
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [confirmpassword, setconfirmpassword] = useState('')
const [isRegistered, setIsRegistered] = useState(false);
const [isError, setIsError] = useState(false);




const handleSubmit = (e) => {
  e.preventDefault();
  const existingUser = users.find((user) => user.email === email || user.pseudo === pseudo);

  if(existingUser){
     setIsError(true)
  }else{
    const newUser = {id: users.length + 1, firstName, lastName, pseudo, password, email, phone, password, confirmpassword }
     
    users.push(newUser)
      setIsRegistered(true)
  }

}

 
const btn =   firstName === '' || lastName === '' || pseudo === '' || email === '' || phone === '' || password === '' || password !== confirmpassword || year <= 0
? <button className='btnSignup' disabled >inscription</button> : <button>inscription</button>


return ( 
  <div>
  {isRegistered ? (

    <Welcome />
  
  ) : (
    <>
    <div >
      <h1> SignUp </h1>

    <form onSubmit={handleSubmit}>  
    <div className='formContain'>
    <div>
    <label htmlFor="lastName" > Prénom</label><br />
    <input className='InputsignUp' onChange={(e) =>setfirstName(e.target.value)} value={firstName} type="text" id="firstName" autoComplete='off'  required/>
    </div>
     <div>
    <label htmlFor="firstName">Nom</label><br />
    <input className='InputsignUp' onChange={(e) =>setlastName(e.target.value)} value={lastName}  type="text" id="lastName" autoComplete='off' required/><br/>
    </div>
    </div>

    <div className='formContain'>
    <div>
    <label htmlFor="pseudo" >Pseudo </label><br />
    <input className='InputsignUp' onChange={(e) => setpseudo(e.target.value)} value={pseudo}  type="text"  id="pseudo" autoComplete='off' required/>
    </div>
    <div>
    <label htmlFor="email" >Email </label><br />
    <input className='InputsignUp' onChange={(e) =>setemail(e.target.value)} value={email} type="email"  id="email" autoComplete='off' required /><br />
    </div>
    </div>
    <div className='formContain'>
    <div>
    <label htmlFor="phone">Téléphone </label> <br />
    <input className='InputsignUp' onChange={(e) =>setphone(e.target.value)} value={phone} type="phone"  id="phone" autoComplete='off' required/>
    </div>
    <div>
    <label htmlFor="year" >Âge </label><br />
    <input className='InputsignUp' onChange={(e) =>setyear(e.target.value)} value={year} type="number"  id="year" autoComplete='off' required /><br/>
    </div>
    </div>
    <div className='formContain'>
    <div>
    <label htmlFor="password" >password </label><br />
    <input className='InputsignUp' onChange={(e) =>setpassword(e.target.value)} value={password} type="password"  id="password" autoComplete='off' required/>
    </div>
    <div>
    <label htmlFor='confirmpassword'>Confirm password </label><br />
    <input className='InputsignUp' onChange={(e) =>setconfirmpassword(e.target.value)} value={confirmpassword} type="password"  id="confirmpassword" autoComplete='off' required/><br/>
    </div>
    </div>
    
    <div className='formContain'>
       
      {isError && <p>L'utilisateur existe déjà.</p>}
  
      {btn}
    
    <Link  to='/login'><input className='btn' type="submit" value="deja inscrit"/></Link>
    
    </div>

</form>
</div>
</>
)}
</div>

)
}
    
    
export default SignUp




