import React from 'react';

const Input = (props) => {
    return (
        <div>
            <label>{props.title} : </label>
            <input 
                required
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
};

export default Input;