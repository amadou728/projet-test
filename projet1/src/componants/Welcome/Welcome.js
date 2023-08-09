import React from 'react'
import { Link } from 'react-router-dom'


const Welcome = () => {


  return (
    <>
      <header className='headerWelcom'>
        <div>
          <h1>FIRST</h1>
          <Link>create annonce</Link>
          <Link>all annonces</Link>
        </div>
        <div>
        <h2>bienvenu {}</h2>
        <button>logout</button>
        </div>
      </header>
      <main>
     menu
      </main>
     </>
  )
}

export default Welcome