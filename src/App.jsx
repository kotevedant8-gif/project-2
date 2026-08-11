import React from 'react'
import Home from './Home'
import About from './About'
import Tata from './Tata'
import './Lo.css'
import { useNavigate } from 'react-router-dom'
import {Route,Routes,Link, NavLink} from 'react-router-dom'
const App = () => {
   let nav=useNavigate()
  function aa(){
    nav('/tata')
  }   
  return (
 

    <div>
       <div className='aa'>     
       <NavLink  to='/' >Home</NavLink>
      <NavLink to='/about' >About</NavLink>
      <button onClick={aa} style={{backgroundColor:'blue',color:'white'}} >Welcom</button>
    </div>
      <div className='bb' >
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/tata' element={<Tata></Tata>}></Route>
      </Routes>
       </div>
      
    </div>

  )
}

export default App
  