import React from 'react';
import './PopupModal.css'

const PopupModal = (props) => {
    console.log(props.popData)
    if(props.popData.length !== 0){
        return (
            <>
                <div className='backdrop'></div>
                <div className='modal'>
                    {props.popData.map((data)=>{
                        return(
                            <div className='header'>
                                <div>날짜 : {data.date}</div>
                                <div>지출이름 : {data.name}</div>
                                <div>지출원 : {data.money}원</div>
                                <div>기분 : 😢</div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
    return (
        <>
            <div className='backdrop'></div>
                <div className='modal'>
                <div className='header'>
                    없어요
                </div>
            </div>
        </>
    )
};

export default PopupModal;