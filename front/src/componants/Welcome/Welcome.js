import './Welcome.css'
import React from 'react'
import { Link } from 'react-router-dom'



const Welcome = () => {


  return (
    <>
      <header className='headerWelcome'>
        <div className='divHead'>
          <h1 className='titlewelcome'>FIRST</h1>
          <button><Link>create annonce</Link></button>
          <button><Link to='/'>all annonces</Link></button>
        </div>
        <div className='divHead'>
        <h2>bienvenu {}</h2>
        <button className='btnLogaout'>logout</button>
        </div>
      </header>
      <main>
        <h1>Create annonce</h1>
        <div>
          <form className='formWelcome'>
            <div>
            <label>Title</label><br />
            <input className='InputTitle' type='text' />
            </div>

            <div>
            <label>Description</label><br />
            <input className='InputDescrition' type='text' />
            </div>

            <div>
            <label>Image</label><br />
            <input className='InputImage' type='text' />
            </div>
            
            <div className='divBtn'>
              <input className='BtnBlakup' type='submit' value='Blakup' />
              <input className='BtnCreate' type='submit' value='Create' />
            </div>

          </form>
        </div>
      </main>
     </>
  )
}

export default Welcome