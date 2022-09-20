import React, {useContext} from 'react';
import myContext from '../../store/my-context-api'
import './PopupModal.css'
import moment from "moment";
import Card from '../UI/Card';

const PopupModal = (props) => {
    const context = useContext(myContext)
    const emotioEmoji = (emotion) => {
        if(emotion == 1){
            return '😍'
        }else if(emotion == 2){
            return '😊'
        }else if(emotion == 3){
            return '😢'
        }else{
            return '😡'
        }
    }

    if(props.popData.length !== 0){
        return (
            <>
                <div className='backdrop' onClick={()=>{context.popUpTrigger(false)}}></div>
                <Card className='modal'>
                    <h2 className='header'>{moment(props.popDate).format('YYYY-MM-DD')}</h2>
                    {props.popData.map((data)=>{
                        return(
                            <div className='content'>
                                <div>지출이름 : {data.name}</div>
                                <div>지출원 : {data.money}원</div>
                                <div>기분 : {emotioEmoji(data.emotion)}</div>
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
                <div className='content'>없어요</div>
            </Card>
        </>
    )
};

export default PopupModal;