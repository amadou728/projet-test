import React, { Fragment} from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { annonces } from '../../data'






const Home = () => {



  return (
    <Fragment>
      <div className='App'>
      <header className='header'>
        <div>
        <h1>First</h1>
        </div>
        <div className='InputLoGin'>
          <li>
            <Link to='/login' >login</Link>
          </li>
          <li>
            <Link to="signup" >SignUp</Link>
          </li>
        </div>
      </header>
      <main> 
        
   {annonces.map(annonce =>{
    
      return(
        <>
        <div className='page'>
          <div className='head'>
            <h1>{annonce.title}</h1>
            <p>{annonce.create_at}</p>
          </div>
          <div>
            <img src={require('../../asset/photo1.jpeg') } alt='photo' className='image' />
            <p>{annonce.description}</p>
          </div>
          </div>
          </>
      )
      
   })}

    
        
      </main>
   </div>
    </Fragment>
  )
}

export default Home