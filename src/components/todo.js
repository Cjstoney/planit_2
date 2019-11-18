import React from "react";
import axios from 'axios';

/*const getDate = input => {
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
    // console.log("todo ", payload);
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
 


class ToDo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      items: null
    };
  }

  componentDidMount() {
   let payload = this.props.date  
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      let todoItems = this.props.date
      // console.log(todoItems, "todo")

      let payload = {
        dayOfWeek: todoItems.dayOfWeek,
        month: todoItems.month,
        dayOfMonth: todoItems.dayOfMonth,
        year: todoItems.year,
        user: todoItems.user
      };
      // console.log("todo ", payload);
      axios
      .post("http://localhost:3001/api/month", {
       payload
      })
      .then(response => {
        console.log(response, "response");
        this.setState({
          item: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }
    }
  
  

  render() {

    return (
      // create a div that will have the title of "todo"
      // needs to have a add new todo button on the bottom of the container
      // send a get request with the date to the todo table
      // if there is something to do, render it as a list item.
      // list item needs to have a button for complete and trash
      <div>
        <h3 className="todo-title">Events this month</h3>
        <div></div>
        <button className="add-button-container">
          <img src="./icons/iconfinder_plus_alt_118618.png" alt="add-button" />
        </button>
      </div>
    );
  }
}

export default ToDo;
