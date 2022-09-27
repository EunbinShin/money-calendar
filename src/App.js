import React, {useContext} from 'react';
import myContext from './store/my-context-api'

import './App.css';

import MainCalendar from './components/calendar/MainCalendar';
import Chart from './components/chart/Chart';
import MoneyInput from './components/dataform/MoneyInput';
import NavigationBar from './components/navigation/NavigationBar';

function App() {
  const context = useContext(myContext)
  
  const mainPage = () => {
    if(context.page_index == 0){
      return (
        <>
          <MainCalendar></MainCalendar>
          <MoneyInput></MoneyInput>
        </>)
    }else if(context.page_index == 1){
      return (<Chart></Chart>)
    }
  }
  

  return ( 
    <>
      <NavigationBar></NavigationBar>
      {
        mainPage()
      }
    </>
  );
}

export default App;
