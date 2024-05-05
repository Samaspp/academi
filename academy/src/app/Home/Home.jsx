
import React from 'react'
import './Home.css'

import { Link } from 'react-router-dom'
import careHome from '../../assets/care.png'

const Home = () => {

  return (
 <div className="home" style ={{ backgroundImage: `url(${careHome})` }}>
        <div className="headerContainer" >
            <h1>care connect</h1>
            <p>care made simple</p>
            <Link to="/signup">
               <button>SIGN UP</button>
            </Link>
        </div>
    </div>
  )
}

export default Home
