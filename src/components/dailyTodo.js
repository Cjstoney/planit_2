import React from 'react'

class DailyTodo extends React.Component{
    constructor(){
        super()
        this.state={
            dailyItems : null
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