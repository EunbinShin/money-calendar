import React, {useState} from 'react'

const myContext = React.createContext({
    onAddAccount: ()=>{},
    myUsedLog: []
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

    const addAccountHander = (account) => {
        setMyUsedLog((prevData)=>{
            return [...prevData, account]
        })
        console.log(myUsedLog)
    }

    return (
        <myContext.Provider
            value={{
                onAddAccount: addAccountHander,
                myUsedLog: myUsedLog
            }}>
            {props.children}
        </myContext.Provider>
    )
}

export default myContext