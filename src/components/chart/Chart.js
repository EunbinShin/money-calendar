import React, {useContext} from 'react';
import { ResponsiveBar } from '@nivo/bar'
import myContext from '../../store/my-context-api'

const Chart = () => {
    const context = useContext(myContext)
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const changeData = (data) => {
        const changedData = data
        return changedData
    }
    console.log(context.myUsedLog)
    return (
        <ResponsiveBar
        data={context.myUsedLog}
        />
    );
};

export default Chart;