import React from 'react'

class DailyTodo extends React.Component{
    constructor(){
        super()
        this.state={
            dailyItems : null
        }

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
          .post("http://localhost:3001/api/day", {
           payload
          })
          .then(response => {
           
            this.setState({
              items: response.data
            })
          })
          .catch(error => {
            console.log(error);
          });
      }
        }

    render(){
        let dailyitemTodo = this.state.items?(
            <ul className= 'dailyitemTodo'>
              {
                this.state.items.map(function(e, idx, arr){
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
        return(
            <div>
            <h3 className="todo-title">Events this month</h3>
            <div className='daily-Todo-container'>{dailyitemTodo}</div>
            
          </div>
        )
    }
}
export default DailyTodo