import React from "react";
import Calendar from 'react-calendar'



class CalendarComp extends React.Component {
    
    state = {
        value: new Date()
    }
    
    

    onChange = value => this.setState({ value })
    
   
    render() {

        const {value} = this.state; //assiging the state to a variable to have access to it in later functions

        // parses through the date info and prepares it to be used as a paylod to fetch events for that day
        const getDate = () =>{
            let dateString = value.toString();
            let dateArray = dateString.split(" ")
            let payload ={
                dayOfWeek : dateArray[0],
                month : dateArray[1],
                dayOfMonth : dateArray[2],
                year: dateArray[3]
            }
            console.log(payload)
            return payload 
        }
        return (
            <div onClick={getDate}>
                
              <Calendar 
                onChange={this.onChange}
                value={this.state.dat}
              />
            </div>
          );
        }
}

export default CalendarComp;
