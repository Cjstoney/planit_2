import React from "react";
import Calendar from "react-calendar";
import ToDo from "../components/todo";
import DailyTodo from "../components/dailyTodo";

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
    console.log(this.state.monthBdown, "prev")
    // console.log(this.state.value)
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
    console.log(this.state.value)
  }

  render() {
    return (
      <div>
        <div >
        <Calendar onChange={this.onChange} value={this.state.date} />
        </div>
        <ToDo date={this.state.monthBdown} />
        <DailyTodo date={this.state.monthBdown} />
      </div>
    );
  }
}

export default CalendarComp;
