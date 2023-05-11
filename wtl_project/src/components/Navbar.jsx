

import React from 'react'
import{Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"

const Navbar = () => {
  return (
    <nav>
        <h1>SVESTES</h1>
        <main>
            <HashLink to ={"/#home"}>Home</HashLink>
            <Link to ={"/contact"}>Contacts</Link>
            <HashLink to ={"/#about"}>About</HashLink>
            
        </main>
    </nav>
  )
}

export default Navbar
 