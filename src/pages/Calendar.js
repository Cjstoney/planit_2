import React from "react";
import Calendar from "react-calendar";
import ToDo from "../components/todo";

const getDate = input => {
  let dateString = input.toString();
  let payload = {};
  let dateArray = dateString.split(" ");

  if (dateString.length > 20) {
    payload = {
      dayOfWeek: dateArray[0],
      month: dateArray[1],
      dayOfMonth: dateArray[2],
      year: dateArray[3]
    };
    console.log(payload);
    return payload; // replace this with an ajax or axios call when the routes are complete
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
