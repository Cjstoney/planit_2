import React from 'react'
import axios from 'axios'
import './dailyTodo.css'

class DailyTodo extends React.Component{
    constructor(){
        super()
        this.state={
            dailyItems : null
        }

    }

    componentDidMount(){
      console.log(this.props.day)
    }

    componentDidUpdate(prevProps) {
        // console.log(this.props.date)
        if (this.props.day !== prevProps.day) {
          // let dailyTodoItems = this.props.date
          console.log(this.props.day, "daily")
          let dailyStringDate = this.props.day.toString();
          const array = dailyStringDate.split(" ");
          const dailyUser = window.localStorage.getItem('uid')
        let payload = {} 
          console.log(array)
          payload = {
            month: array[1],
            dayOfMonth: array[2],
            year: array[3],
            user: dailyUser
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
                    <li className= 'dailyitemTodo' id='returnedEvents' key={e.Event_id} id={e.Event_id}>
                      {e.name}
                      <div className='dailyitemTodo' id='itemDescription'>{e.description}</div>
                      
                      </li>
                  )
                }
                )}
            </ul>
          ):(<h3 className= 'dailyitemTodo'id='nothing-to-do-text'>Nothing Planned Yet</h3>)
        return(
            <div className='daily-todo-container'>
            <h3 className='dailyitemTodo' id="todo-title">Stuff to do today</h3>
            <div className='dailyitemtodo-container'>{dailyitemTodo}</div>
            
          </div>
        )
    }
}
export default DailyTodo