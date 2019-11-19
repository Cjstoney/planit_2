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
        return(
            <div>
            <h3 className="todo-title">Events this month</h3>
            <div className='daily-Todo-container'></div>
            
          </div>
        )
    }
}
export default DailyTodo