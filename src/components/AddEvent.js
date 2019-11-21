import React from 'react'
import Form from 'react-bootstrap/Form'

class AddEvent extends React.Component {
    constructor(props){
    super (props)
     this.state = {

     }
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
          onClick={}
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