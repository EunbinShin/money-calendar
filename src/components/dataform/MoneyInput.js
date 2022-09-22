import React, { useContext, useRef, useReducer, useEffect, useState } from 'react';
import './MoneyInput.css';
import myContext from '../../store/my-context-api'

const MoneyInput = () => {
    const context = useContext(myContext)
    const formRef = useRef()

    const inputReducer = (state, action) => {
        if(action.type === 'USER_INPUT'){
            return {
                ...state,
                [action.field] : action.value
            }
        }
        
        return {
            date: '',
            name: '',
            money: 0,
            emotion: 0
        }
    }

    const [userInputState, dispatchUserInputState] = useReducer(inputReducer,{
        date: '',
        name: '',
        money: 0,
        emotion: 0
    })

    const inputChangeHandler = (event) =>{
        dispatchUserInputState({
            type: 'USER_INPUT',
            field: event.target.name,
            value: event.target.value
        })
    }

    const submitMoneyFormHandler = (event) => {
        event.preventDefault()
        context.onAddAccount(userInputState)
        dispatchUserInputState({type: 'USER_RESET'})
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
                        required
                        type="date"
                        name="date"
                        value={userInputState.date}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div>
                    <label>내용 : </label>
                    <input 
                        required
                        type="text"
                        name="name"
                        value={userInputState.name}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div>
                    <label>내역 : </label>
                    <input 
                        required
                        type="number"
                        name="money"
                        value={userInputState.money}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div>
                    <label>기분 : </label>
                    <label><input required type="radio" name="emotion" value="1" onChange={inputChangeHandler}/>😍</label>
                    <label><input required type="radio" name="emotion" value="2" onChange={inputChangeHandler}/>😊</label>
                    <label><input required type="radio" name="emotion" value="3" onChange={inputChangeHandler}/>😢</label>
                    <label><input required type="radio" name="emotion" value="4" onChange={inputChangeHandler}/>😡</label>
                </div>
                <button type='submit' className='money__save__btn'>저장하기</button>
            </form>
        </div>
    </>
    );
};

export default MoneyInput;