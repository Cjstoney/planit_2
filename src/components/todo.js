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
          items: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }
    }
  
  

  render() {
    let postItem = this.state.items?(
      <ul className= 'postItem'>
        {
          this.state.items.map(function(e, idx, arr){
            console.log(e)
            return(
              <li className='returnedEvents' key={e.Event_id} id={e.Event_id}>
                {e.name}
                <div className='itemDate'>{e.month}</div>
                <div className='itemDate'>{e.day}</div>
                <div className='itemDate'>{e.year}</div>
                <div className='itemDescription'>{e.description}</div>
                
                </li>
            )
          }
          )}
      </ul>
    ):(<h1>Nothing to See here</h1>)
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
