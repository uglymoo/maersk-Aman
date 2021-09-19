import React, {useRef } from 'react'
import './Navbar.css';
import Card from './Card';

function Navbar() {
    const childRefShuffle = useRef();
    const childRefSorted = useRef();    

    return (
       <div>
       <nav className ="navbar">
           <div className="navbar-container">
               <ul className="nav-menu">
                   <div className="nav-item">
                       <button onClick = {()=>childRefShuffle.current.shuffled()} className="btn-shuffle">SHUFFLE</button>
                       <button onClick = {()=>childRefSorted.current.sorted()} className="btn-sort">SORT</button>
                  </div>
               </ul>
           </div>
       </nav>
       <Card ref={[childRefShuffle,childRefSorted]}/>
       </div>
    )
}

export default Navbar
