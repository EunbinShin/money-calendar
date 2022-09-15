import React from 'react';
import './MoneyInput.css';

const MoneyInput = () => {
    return (
        <div className='money__input__container'>
            <button type='button' className='money__input__btn'>입력하기</button>
            <form>
                <div>
                    <label>날짜</label>
                    <input type="date"></input>
                </div>
                <div>
                    <label>내용</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>내역</label>
                    <input type="number"></input>
                </div>
                <div>
                <label>기분</label>
                    <label><input type="radio" name="emoji"/>😍</label>
                    <label><input type="radio" name="emoji"/>😊</label>
                    <label><input type="radio" name="emoji"/>😢</label>
                    <label><input type="radio" name="emoji"/>😡</label>
                </div>
            </form>
        </div>
    );
};

export default MoneyInput;