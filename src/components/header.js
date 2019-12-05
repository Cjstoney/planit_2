import React from 'react'
import Button from 'react-bootstrap/Button'

function header() {
    return (
        <div>
            <h1 className='app-title'>Planit</h1>
            <Button variant="outline-success" className="newUser-button" id="createNewUser" onClick={newUserPayload}>Create User</Button>
        </div>
    )
}

export default header
