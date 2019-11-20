import React from "react";
import Calendar from "react-calendar";
import ToDo from "../components/todo";
import DailyTodo from "../components/dailyTodo";
// import axios from "axios";

class CalendarComp extends React.Component {
  constructor() {
    super();
    this.state = {
      value: new Date(),
      monthBdown: null,
      day: null
    };
  }
  onChange = value => this.setState({ value });
  onClickDay = day => this.setState({day})
  
  componentDidUpdate() {
    // getDate(this.state.value);
    console.log(this.state)
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
      this.setState({ monthBdown: monthPayload });
    }
  }
  
  render() {
    return (
      <div onClick={this.getDate}>
      <Calendar  onChange={this.onChange} value={this.state.date} onClickDay={this.onClickDay} />
        <ToDo date={this.state.monthBdown} day={this.state.day} />
        <DailyTodo day={this.state.day} />
      </div>
    );
  }
}

export default CalendarComp;
