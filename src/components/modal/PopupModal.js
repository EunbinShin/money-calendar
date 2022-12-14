import React, {useContext} from 'react';
import myContext from '../../store/my-context-api'
import './PopupModal.css'
import moment from "moment";
import Card from '../UI/Card';

const PopupModal = (props) => {
    const context = useContext(myContext)
    const emotioEmoji = (emotion) => {
        if(emotion === '1'){
            return 'π'
        }else if(emotion === '2'){
            return 'π'
        }else if(emotion === '3'){
            return 'π’'
        }else{
            return 'π‘'
        }
    }

    if(props.popData.length !== 0){
        return (
            <>
                <div className='backdrop' onClick={()=>{context.popUpTrigger(false)}}></div>
                <Card className='modal'>
                    <h2 className='header'>{moment(props.popDate).format('YYYY-MM-DD')}</h2>
                    {props.popData.map((data, index)=>{
                        return(
                            <div className='content' key={index}>
                                <div>μ§μΆμ΄λ¦ : {data.name}</div>
                                <div>μ§μΆμ : {data.money}μ</div>
                                <div>κΈ°λΆ : {emotioEmoji(data.emotion)}</div>
                            </div>
                        )
                    })}
                </Card>
            </>
        );
    }
    return (
        <>
            <div className='backdrop' onClick={()=>{context.popUpTrigger(false)}}></div>
            <Card className='modal'>
                <h2 className='header'>{moment(props.popDate).format('YYYY-MM-DD')}</h2>
                <div className='content'>μμ΄μ</div>
            </Card>
        </>
    )
};

export default PopupModal;