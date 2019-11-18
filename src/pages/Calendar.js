import React from "react";
import Calendar from "react-calendar";
import ToDo from "../components/todo";
import axios from "axios";

/*const getDate = input => {
  let dateString = input.toString();
  let monthPayload = {};
  let dateArray = dateString.split(" ");
  let uid = window.localStorage.getItem("uid");
  if (dateString.length > 20) {
    monthPayload = {
      month: dateArray[1],
      dayOfWeek: dateArray[0],
      dayOfMonth: dateArray[2],
      year: dateArray[3],
      user: uid
    };
    // console.log("fsmonth", monthPayload);
    axios
      .post("http://localhost:3001/api/month", {
        monthPayload
      })
      .then(response => {
        console.log(response, "response");
        return response;
      })
      .catch(error => {
        console.log(error);
      });
  }
};*/

class CalendarComp extends React.Component {
  constructor() {
    super();
    this.state = {
      value: new Date(),
      monthBdown: null
    };
  }

  onChange = value => this.setState({ value });

  componentDidUpdate() {
    // getDate(this.state.value);
  }
  
  componentDidMount() {
    let dateString = this.state.value.toString();
    let monthPayload = {};
    let dateArray = dateString.split(" ");
    let uid = window.localStorage.getItem("uid");
    if (dateString.length > 20) {
      monthPayload = {
        month: dateArray[1],
        dayOfWeek: dateArray[0],
        dayOfMonth: dateArray[2],
        year: dateArray[3],
        user: uid
      };
      this.setState({ monthBdown : monthPayload})
  }
}

  render() {
  
    return (
      <div>
        {/* <div onClick={getDate}> */}
          <Calendar onChange={this.onChange} value={this.state.date} />
        {/* </div> */}
        <ToDo date={this.state.monthBdown} />
      </div>
    );
  }
}

export default CalendarComp;
