import './Welcome.css'
import React from 'react'
import {users} from '../../data'
import { Link } from 'react-router-dom'



const Welcome = () => {




  return (
    <>
      <header className='headerWelcome'>
        <div className='divHead'>
          <h1 className='titlewelcome'>FIRST</h1>
          <button><Link href='Create' >create annonce</Link></button>
          <button><Link to='/'>all annonces</Link></button>
        </div>
        <div className='divHead'>

         {users.map(user =>{
          return(
            <h2>bienvenu {user.lastname}</h2>
          )
         })}
         <button className='btnLogout'><Link to='/'>logout</Link></button>
        </div>
      </header>
      <main>
        <h1>Create annonce</h1>
        
        <div>
          <form className='formWelcome' >
            <div>
            <label>Title </label><br />
            <input className='InputTitle' type='text' />
            </div>

            <div>
            <label>Description </label><br />
            <input className='InputDescrition' type='text' />
            </div>

            <div>
            <label>Image </label><br />
            <input className='InputImage' type='text' />
            </div>
            
            <div className='divBtn'>
              <input className='BtnBlakup' type='submit' id='Blakup' value='Blakup' />
              <input className='BtnCreate' type='submit' id='Create' value='Create' />
            </div>

          </form>
          </div>
        
      </main>
     </>
  )
}

export default Welcome