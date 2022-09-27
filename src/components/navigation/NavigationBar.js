import React, {useContext} from 'react';
import myContext from '../../store/my-context-api'
import './NavigationBar.css'

const NavigationBar = () => {
    const context = useContext(myContext)
    return (
        <nav className='navigation__bar'>
            <ul>
                <li 
                    style={{backgroundColor: (context.page_index == 0) ? 'rgb(240,240,240)':'rgb(255,255,255)'}}
                    onClick={()=>{context.setPageIndex(0)}} 
                    className='navigation__main'>📅</li>
                <li 
                    style={{backgroundColor: (context.page_index == 1) ? 'rgb(240,240,240)':'rgb(255,255,255)'}}
                    onClick={()=>{context.setPageIndex(1)}} 
                    className='navigation__main'>📊</li>
            </ul>
        </nav>
    );
};

export default NavigationBar;