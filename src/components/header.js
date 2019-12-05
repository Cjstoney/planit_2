import React from 'react'
import Button from 'react-bootstrap/Button'
import './header.css'

function Header() {
const logout = ()=>{
    if(localStorage.getItem('uid')!== null){
        localStorage.clear()
    }
}

    return (
        <div className='header-container'>
            <h1 className='app-title'>Planit</h1>
            <Button variant="outline-success" className="logout-button" id="createNewUser" onClick={logout}>Logout</Button>
        </div>
    )
}

export default Header
