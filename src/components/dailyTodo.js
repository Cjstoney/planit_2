import React from 'react'
import axios from 'axios'

class DailyTodo extends React.Component{
    constructor(){
        super()
        this.state={
            dailyItems : null
        }

    }

    componentDidUpdate(prevProps) {
        // console.log(this.props.date)
        if (this.props.date !== prevProps.date) {
          let dailyTodoItems = this.props.date
        //   console.log(dailyTodoItems, "todo")
    
          let payload = {
            dayOfWeek: dailyTodoItems.dayOfWeek,
            month: dailyTodoItems.month,
            dayOfMonth: dailyTodoItems.dayOfMonth,
            year: dailyTodoItems.year,
            user: dailyTodoItems.user
          };
          // console.log("todo ", payload);
          axios
          .post("http://localhost:3001/api/day", {
           payload
          })
          .then(response => {
           
            this.setState({
              dailyItems: response.data
            })
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
    
    render(){
        let dailyitemTodo = this.state.dailyItems?(
            <ul className= 'dailyitemTodo'> {this.state.dailyItems.day}
              {
                this.state.dailyItems.map(function(e, idx, arr){
                  return(
                    <li className='returnedEvents' key={e.Event_id} id={e.Event_id}>
                      {e.name}
                      <div className='itemDescription'>{e.description}</div>
                      
                      </li>
                  )
                }
                )}
            </ul>
          ):(<h1>Nothing to See here</h1>)
        return(
            <div>
            <h3 className="todo-title">Stuff to do today</h3>
            <div className='daily-Todo-container'>{dailyitemTodo}</div>
            
          </div>
        )
    }
}
export default DailyTodo