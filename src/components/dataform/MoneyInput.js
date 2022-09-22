import React, { useContext, useRef } from 'react';
import './MoneyInput.css';
import myContext from '../../store/my-context-api'
import Input from '../UI/Input';

const MoneyInput = () => {
    const context = useContext(myContext)
    const formRef = useRef()

    const submitMoneyFormHandler = (event) => {
        event.preventDefault()
        context.onAddAccount(context.inputState)
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
                <Input 
                    title="날짜"
                    type="date"
                    name="date"
                    value={context.inputState.date}
                    onChange={context.onChangeInput}
                />
                <Input 
                    title="내용"
                    required
                    type="text"
                    name="name"
                    value={context.inputState.name}
                    onChange={context.onChangeInput}
                />
                <Input 
                    title="내역"
                    required
                    type="number"
                    name="money"
                    value={context.inputState.money}
                    onChange={context.onChangeInput}
                />
                <div>
                    <label>기분 : </label>
                    <label><input required type="radio" name="emotion" value="1" onChange={context.onChangeInput}/>😍</label>
                    <label><input required type="radio" name="emotion" value="2" onChange={context.onChangeInput}/>😊</label>
                    <label><input required type="radio" name="emotion" value="3" onChange={context.onChangeInput}/>😢</label>
                    <label><input required type="radio" name="emotion" value="4" onChange={context.onChangeInput}/>😡</label>
                </div>
                <button type='submit' className='money__save__btn'>저장하기</button>
            </form>
        </div>
    </>
    );
};

export default MoneyInput;