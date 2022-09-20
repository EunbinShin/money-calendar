import React, {useState,useContext}from 'react';
import Calendar from 'react-calendar'
import './MainCalendar.css'
import myContext from '../../store/my-context-api'
import moment from "moment";
import PopupModal from '../modal/PopupModal';

const MainCalendar = () => {
    const context = useContext(myContext)
    const [clickedDate, setClickedDate] = useState()
    const [popData, setPopData] = useState()
    const tileContent = (date) => {
        let html = []
        context.myUsedLog.map((mylog, i)=>{
            if(mylog.date === moment(date).format('YYYY-MM-DD')){
                html.push(
                    <div key={i} className="mylog">
                        <span>{mylog.name}</span>
                    </div>
                )
            }
        })
        return html
    }
    
    const tileClickHandler = (date) => {
        const sendData = context.myUsedLog.filter((mylog)=>mylog.date === moment(date).format('YYYY-MM-DD'))
        setClickedDate(date)
        setPopData(sendData)
        context.popUpTrigger(true)
    }
    
    return (
    <>
        { context.isPopUp && <PopupModal popDate={clickedDate} popData={popData}/> }
        <Calendar 
            onChange={tileClickHandler}
            formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
            tileContent = {({date, view}) => {
                const result = tileContent(date)
                return <div>{result}</div>
        }}/>
    </>
    );
};

export default MainCalendar;