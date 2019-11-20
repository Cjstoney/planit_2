import React from "react";
import axios from "axios";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null
    };
  }

  componentDidMount() {
    // console.log(this.props.day);
  }

  componentDidUpdate(prevProps) {
    if (this.props.day !== prevProps.day) {
      let stringDate = this.props.day.toString();
      const array = stringDate.split(" ");
      const user = window.localStorage.getItem("uid");
      let payload = {};
      // console.log(array, "array");

      payload = {
        month: array[1],
        year: array[3],
        user: user
      };
      // console.log("todo ", payload);
      axios
        .post("http://localhost:3001/api/month", {
          payload
        })
        .then(response => {
          // console.log(response, "response");
          this.setState({
            items: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    let postItem = this.state.items ? (
      <ul className="postItem">
        {this.state.items.map(function(e, idx, arr) {
          return (
            <li className="returnedEvents" key={e.Event_id} id={e.Event_id}>
              {e.name}
              <div className="itemDate">{e.month}</div>
              <div className="itemDate">{e.day}</div>
              <div className="itemDate">{e.year}</div>
              <div className="itemDescription">{e.description}</div>
            </li>
          );
        })}
      </ul>
    ) : (
      <h1>Nothing to See here</h1>
    );
    return (
      // create a div that will have the title of "todo"
      // needs to have a add new todo button on the bottom of the container
      // send a get request with the date to the todo table
      // if there is something to do, render it as a list item.
      // list item needs to have a button for complete and trash
      <div>
        <h3 className="todo-title">Events this month</h3>
        <div>{postItem}</div>
        <button className="add-button-container">
          <img src="./icons/iconfinder_plus_alt_118618.png" alt="add-button" />
        </button>
      </div>
    );
  }
}

export default ToDo;
