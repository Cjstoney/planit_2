import React from "react";
import axios from "axios";
import './todo.css'

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
              <div>
              <div className="itemDate">{e.month}</div>
              <div className="itemDate">{e.day}</div>
              <div className="itemDate">{e.year}</div>
              </div>
              <div className="itemDescription">{e.description}</div>
            </li>
          );
        })}
      </ul>
    ) : (
      <h3>Nothing Planned This Month</h3>
    );
    return (
      // list item needs to have a button for complete and trash
      <div className='monthly-todo-container'>
        <h3 className="monthly-todo-title">Events this month:</h3>
        <div>{postItem}</div>
        <hr className='page-break'></hr>
      </div>
    );
  }
}

export default ToDo;
