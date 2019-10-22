import React from "react";
import moment from "moment";
import Calendar from 'react-calendar'



class CalendarComp extends React.Component {
        state = {
          date: new Date(),
        }
       
        onChange = date => this.setState({ date })
       
        render() {
          return (
            <div>
              <Calendar
                onChange={this.onChange}
                value={this.state.date}
              />
            </div>
          );
        }
}

export default CalendarComp;
