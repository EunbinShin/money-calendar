import React, { useState,useContext,useRef } from 'react';
import './MoneyInput.css';
import myContext from '../../store/my-context-api'

const MoneyInput = () => {
    const context = useContext(myContext)
    const formRef = useRef()
    const [userInput, setUserInput] = useState({
        date: '',
        name: '',
        money: 0,
        emotion: 0
    })

    const dateChangeHandler = (event) =>{
        setUserInput((prevState)=>{
            return {...prevState, date: event.target.value}
        })
    }

    const nameChangeHandler = (event) =>{
        setUserInput((prevState)=>{
            return {...prevState, name: event.target.value}
        })
    }

    const moneyChangeHandler = (event) =>{
        setUserInput((prevState)=>{
            return {...prevState, money: parseInt(event.target.value)}
        })
    }

    const emotionChangeHadler = (event) =>{
        setUserInput((prevState)=>{
            return {...prevState, emotion: parseInt(event.target.value)}
        })
    }

    const submitMoneyFormHandler = (event) => {
        event.preventDefault()
        context.onAddAccount(userInput)
        setUserInput({
            date: '',
            name: '',
            money: 0,
            emotion: 0
        })
    }

    return (
    <>
        <button 
            type='button' 
            className='money__input__btn'
            onClick={()=>{
                if(formRef.current.classList.contains('temp')){
                    formRef.current.classList.remove("temp")
                }else{
                    formRef.current.classList.add("temp")
                }
            }}
        >입력하기</button>
        <div className='money__input__container' ref={formRef}>
            <form onSubmit={submitMoneyFormHandler} className='money__input__form'>
                <div>
                    <label>날짜 : </label>
                    <input 
                        type="date"
                        value={userInput.date}
                        onChange={dateChangeHandler}
                    />
                </div>
                <div>
                    <label>내용 : </label>
                    <input 
                        type="text"
                        value={userInput.name}
                        onChange={nameChangeHandler}
                    />
                </div>
                <div>
                    <label>내역 : </label>
                    <input 
                        type="number"
                        value={userInput.money}
                        onChange={moneyChangeHandler}
                    />
                </div>
                <div>
                    <label>기분 : </label>
                    <label><input type="radio" name="emoji" value="1" onChange={emotionChangeHadler}/>😍</label>
                    <label><input type="radio" name="emoji" value="2" onChange={emotionChangeHadler}/>😊</label>
                    <label><input type="radio" name="emoji" value="3" onChange={emotionChangeHadler}/>😢</label>
                    <label><input type="radio" name="emoji" value="4" onChange={emotionChangeHadler}/>😡</label>
                </div>
                <button type='submit' className='money__save__btn'>저장하기</button>
            </form>
        </div>
    </>
    );
};

export default MoneyInput;