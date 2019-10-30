import React from "react";
import axios from 'axios';

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
    console.log("todo ", payload);
    axios.get('route').then(res => {
        this.setState({
            items: res.data
        })
    }); // replace this with an ajax or axios call when the routes are complete
  }
};


class ToDo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      date: props.date,
      items: null
    };
  }

  componentDidMount() {
    getDate(this.state.date);
  }

  render() {

    let listItem = this.state.items ? (
        <ul className='todo-list'>
            {this.state.items.map(function(e,idx,arr){
                console.log(e)
                return(
                    <li className={"list-item-"+ e.id} key={e.id}>{e.name}</li>
                )
            })}
        </ul>
    ):(<h2>Nothing to do</h2>)
    return (
      // create a div that will have the title of "todo"
      // needs to have a add new todo button on the bottom of the container
      // send a get request with the date to the todo table
      // if there is something to do, render it as a list item.
      // list item needs to have a button for complete and trash
      <div>
        <h3 className="todo-title">To-do!</h3>
        <div>{listItem}</div>
        <button className="add-button-container">
          <img src="./icons/iconfinder_plus_alt_118618.png" alt="add-button" />
        </button>
      </div>
    );
  }
}

export default ToDo;
