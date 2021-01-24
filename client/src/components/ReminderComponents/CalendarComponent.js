import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());
    
    const onChange = date => {
        this.setDate(date)
    }
return(
    <>
        <Calendar
            onChange={onChange}
            
            value={date}
            />
    </>
)
}

export default CalendarComponent;

