import React, {useState,useContext}from 'react';
import Calendar from 'react-calendar'
import './MainCalendar.css'
import myContext from '../../store/my-context-api'
import moment from "moment";
import PopupModal from '../modal/PopupModal';

const MainCalendar = () => {
    const context = useContext(myContext)
    const [isPop, setIsPop] = useState(false)
    const [popData, setPopData] = useState()
    return (<>
        {
            isPop && <PopupModal popData={popData}/>
        }
        <Calendar 
            onChange={(date)=>{
                const temp = context.myUsedLog.filter((mylog)=>mylog.date === moment(date).format('YYYY-MM-DD'))
                setPopData(temp)
                setIsPop(true)
            }}
            formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
            tileContent = {({date, view}) => {
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
                
                return (
                    <div>
                        {html}
                    </div>
                )
            }}/>
        </>
    );
};

export default MainCalendar;