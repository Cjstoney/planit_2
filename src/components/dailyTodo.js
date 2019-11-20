import React from 'react'
import axios from 'axios'

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