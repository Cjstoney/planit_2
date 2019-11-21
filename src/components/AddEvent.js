import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

class AddEvent extends React.Component {
    constructor(props){
    super (props)
     this.state = {

     }
    }
    
    addEventpayload = ()=>{
        const eventName = document.getElementsByName('event-name')[0].value;
        const eventDesc = document.getElementsByName('event-Description')[0].value;
        const dateString = this.props.day.toString()
        const dateArray = dateString.split(' ')
        const eventUser = window.localStorage.getItem('uid')
        let payload ={}

        payload = {
        day : dateArray[2],
        month : dateArray[1],
        year : dateArray[3],
        user : eventUser,
        event: eventName,
        description : eventDesc
        }
        console.log(payload)

        axios.post('http://localhost:3001/api/addevent', {
            payload
        }).then(
            response =>{
                console.log(response)
            }
        ).catch(error =>{
            console.log(error)
        })
    }

    componentDidMount(){
        console.log('[addevent] we made it')
    }


    render(){
        return(
            <div className='add-event=container' >
                 <Form>
          {/* render the event name */}
          <Form.Group controlId="formEventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control name="event-name" type="text" placeholder="Event Name" />
          </Form.Group>
          <Form.Group controlId="formEventDesc">
            <Form.Label>Event Description</Form.Label>
            <Form.Control name="event-Description" type="text" placeholder="Event Description" />
          </Form.Group> 
        </Form>
        <Button
          onClick={this.addEventpayload}
          variant="outline-primary"
          className="login"
        >
          Add Event
        </Button>
            </div>
        )
    }
}
export default AddEvent;