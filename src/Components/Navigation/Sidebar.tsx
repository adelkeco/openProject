import {SlidebarData1} from './SlidebarData'
import {SlidebarData2} from './SlidebarData'
import {SlidebarData3} from './SlidebarData'
import {SlidebarData4} from './SlidebarData'


function Sidebar() {
    return (
        <div className='Slidebar'>
            <p className='Category-nav'>MENU</p>
            <ul className='SlidebarList'>
                {SlidebarData1.map((val, key) => {
                    return (
                    <li key={key} className='row' onClick={()=>{window.location.pathname= val.link}}>
                        
                        <div id= 'icon'>{val.icon}</div> <div id='title'>{val.title}</div>
                    </li>
                    );
                })} 
            </ul>
            <hr></hr>
            <p className='Category-nav'>LIBRARY</p>
            <ul className='SlidebarList'>
                {SlidebarData2.map((val, key) => {
                    return (
                    <li key={key} className='row' onClick={()=>{window.location.pathname= val.link}}>
                        
                        <div id= 'icon'>{val.icon}</div> <div id='title'>{val.title}</div>
                    </li>
                    );
                })} 
            </ul>
            <hr></hr>
            <ul className='SlidebarList'>
                {SlidebarData3.map((val, key) => {
                    return (
                    <li key={key} className='row' onClick={()=>{window.location.pathname= val.link}}>
                        
                        <div id= 'icon'>{val.icon}</div> <div id='title'>{val.title}</div>
                    </li>
                    );
                })} 
            </ul>

            <ul className='Logout'>
                {SlidebarData4.map((val, key) => {
                    return (
                    <li key={key} className='row' onClick={()=>{window.location.pathname= val.link}}>
                        
                        <div id= 'icon'>{val.icon}</div> <div id='title'>{val.title}</div>
                    </li>
                    );
                })} 
            </ul>
        </div>
    )
}

export default Sidebar