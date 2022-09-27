import React, {useContext} from 'react';
import myContext from '../../store/my-context-api'
import './NavigationBar.css'

const NavigationBar = () => {
    const context = useContext(myContext)
    return (
        <nav className='navigation__bar'>
            <ul>
                <li onClick={()=>{context.setPageIndex(0)}} className='navigation__main'>달력</li>
                <li onClick={()=>{context.setPageIndex(1)}} className='navigation__main'>통계</li>
            </ul>
        </nav>
    );
};

export default NavigationBar;