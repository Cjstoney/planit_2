import React from "react";
import Calendar from 'react-calendar'



class CalendarComp extends React.Component {
    
    state = {
        value: new Date()
    }
    
    

    onChange = value => this.setState({ value })
    
   
    render() {
        const {value} = this.state;
        const getDate = () =>{
            let dateString = value.toString();
            let dateArray = dateString.split(" ")
            console.log(dateArray)
        }
        // console.log(value)
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
