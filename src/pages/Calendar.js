import React from "react";
import Calendar from "react-calendar";
import ToDo from "../components/todo";
import axios from "axios";


const getDate = input => {
  let dateString = input.toString();
  let monthPayload = {};
  let dateArray = dateString.split(" ");
  let uid = window.localStorage.getItem('uid')
  if (dateString.length > 20) {
    monthPayload = {
      dayOfWeek: dateArray[0],
      month: dateArray[1],
      dayOfMonth: dateArray[2],
      year: dateArray[3],
      user: uid
    };
    console.log(monthPayload);
    axios.get("http://localhost:3001/api/month", {
      monthPayload
    }).then(response =>{

    }).catch(error =>{
      console.log(error)
    })
  }
};

class CalendarComp extends React.Component {
  state = {
    value: new Date()
  };

  onChange = value => this.setState({ value });

  componentDidUpdate() {
    getDate(this.state.value);
  }

  componentDidMount() {
    getDate(this.state.value);
  }

  render() {
    return (
      <div>
        <div onClick={getDate}>
          <Calendar onChange={this.onChange} value={this.state.date} />
        </div>
        <ToDo date={this.state.value} />
      </div>
    );
  }
}

export default CalendarComp;
