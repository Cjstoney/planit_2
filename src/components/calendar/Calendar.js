import React from "react";
import Calendar from "react-calendar";


const getDate = (input)=>{
   let dateString = input.toString();
   let dateArray = dateString.split(" ");
   let payload = {
     dayOfWeek: dateArray[0],
     month: dateArray[1],
     dayOfMonth: dateArray[2],
     year: dateArray[3]
   };
   console.log(payload);
   return payload;
  }

class CalendarComp extends React.Component {
  
    state = {
      value: new Date()
    };
  
    onChange = value => this.setState({ value });

  componentDidMount(){
    getDate(this.state.value)
  }
  
  render() {
  
    

    return (
      <div onClick={getDate}>
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}

export default CalendarComp;
