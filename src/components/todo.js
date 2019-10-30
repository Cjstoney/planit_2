import React from "react";

const ToDo = (props) =>{

let lastDate= props.date

    return (
        // create a div that will have the title of "todo"
        // needs to have a add new todo button on the bottom of the container
        // send a get request with the date to the todo table
        // if there is something to do, render it as a list item.
        // list item needs to have a button for complete and trash
        <div>
        {console.log("props.date ", props.date)}      
        <h3 className='todo-title'>To-do!</h3>
      <ul className="todo-list">
        <li></li>
      </ul>
      <button className='add-button-container'>
          <img src='./icons/iconfinder_plus_alt_118618.png' alt='add-button'/>
      </button>
    </div>
  );
    
};

export default ToDo;
