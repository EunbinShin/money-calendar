import React, {useContext} from 'react';
import myContext from '../../store/my-context-api'
import moment from "moment";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
  } from "recharts";

const Chart = () => {
    const context = useContext(myContext)

    const monthly_data = [
        { label: '1월', emotion1: 0 , emotion2: 0 , emotion3: 0 , emotion4: 0},
        { label: '2월', emotion1: 0 , emotion2: 0 , emotion3: 0 , emotion4: 0},
        { label: '3월', emotion1: 0 , emotion2: 0 , emotion3: 0 , emotion4: 0},
        { label: '4월', emotion1: 0 , emotion2: 0 , emotion3: 0 , emotion4: 0},
        { label: '5월', emotion1: 0 , emotion2: 0 , emotion3: 0 , emotion4: 0},
        { label: '6월', emotion1: 0 , emotion2: 0 , emotion3: 0 , emotion4: 0},
        { label: '7월', emotion1: 0 , emotion2: 0 , emotion3: 0 , emotion4: 0},
        { label: '8월', emotion1: 0 , emotion2: 0 , emotion3: 0 , emotion4: 0},
        { label: '9월', emotion1: 0 , emotion2: 0 , emotion3: 0 , emotion4: 0},
        { label: '10월', emotion1: 0 , emotion2: 0 , emotion3: 0 , emotion4: 0},
        { label: '11월', emotion1: 0 , emotion2: 0 , emotion3: 0 , emotion4: 0},
        { label: '12월', emotion1: 0 , emotion2: 0 , emotion3: 0 , emotion4: 0}
    ]

    for(let data of context.myUsedLog){
        const month = moment(data.date).month()
        console.log(data)
        if(data.emotion === 1){
            monthly_data[month].emotion1 += parseInt(data.money)
        }else if(data.emotion === 2){
            monthly_data[month].emotion2 += parseInt(data.money)
        }else if(data.emotion === 3){
            monthly_data[month].emotion3 += parseInt(data.money)
        }else if(data.emotion === 4){
            monthly_data[month].emotion4 += parseInt(data.money)
        }
    }

    return (
        <div style={{height: '100vh', backgroundColor: 'pink'}}>
            <ResponsiveContainer width="100%" height="80%">
                <BarChart
                data={monthly_data}
                layout='vertical'
                margin={{
                    top: 20,
                    right: 30,
                    bottom: 5
                }}
                >
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis  type="number"/>
                <YAxis  type="category" dataKey="label"/>
                <Bar name="😍" dataKey="emotion1" stackId="a" fill="#8884d8" />
                <Bar name="😊" dataKey="emotion2" stackId="a" fill="#82ca9d" />
                <Bar name="😢" dataKey="emotion3" stackId="a" fill="red" />
                <Bar name="😡" dataKey="emotion4" stackId="a" fill="black" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;