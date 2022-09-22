import React, {useState, useReducer} from 'react'

const myContext = React.createContext({
    onAddAccount: ()=>{},
    onChangeInput: ()=>{},
    popUpTrigger: ()=>{}, 
    myUsedLog: [],
    inputState: {},
    isPopUp: false
})

export const MyContextProvider = (props)=>{
    const [myUsedLog, setMyUsedLog] = useState([{
        date: '2022-09-01',
        name: 'test',
        money: 12000,
        emotion: 1
    },{
        date: '2022-09-01',
        name: 'test1-1',
        money: 100,
        emotion: 1
    },{
        date: '2022-09-03',
        name: 'test2',
        money: 5000,
        emotion: 3
    },{
        date: '2022-09-10',
        name: 'test3',
        money: 4500,
        emotion: 4
    }])
    const [isPopUp, setIsPopUp] = useState(false)
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
        console.log(event.target.name, event.target.value)
        dispatchUserInputState({
            type: 'USER_INPUT',
            field: event.target.name,
            value: event.target.value
        })
    }

    const setPopUpHandelr = (flag) => {
        setIsPopUp(flag)
    }

    const addAccountHander = (account) => {
        setMyUsedLog((prevData)=>{
            return [...prevData, account]
        })
        dispatchUserInputState({type: 'USER_RESET'})
        console.log(myUsedLog)
    }

    return (
        <myContext.Provider
            value={{
                onAddAccount: addAccountHander,
                popUpTrigger: setPopUpHandelr,
                onChangeInput: inputChangeHandler,
                myUsedLog: myUsedLog,
                inputState: userInputState,
                isPopUp: isPopUp
            }}>
            {props.children}
        </myContext.Provider>
    )
}

export default myContext