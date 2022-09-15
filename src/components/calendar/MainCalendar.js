import React from 'react';
import Calendar from 'react-calendar'
import './MainCalendar.css'

const MainCalendar = () => {
    return (
        <Calendar 
        formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}/>
    );
};

export default MainCalendar;