import React from 'react';
import "./style.css"

function Main() {
    return (
        <div className='main'>
            <h1>Fun facts about React!</h1>
            <ul className="main-list">
                <li> Was 1st release in 2013 </li>
                <li> Was originally created by Jordan Walke </li>
                <li> Has well over 100k stars on github</li>
                <li> Is Maintained by Facebook</li>
                <li> Powers thousands of enterprise app, including mobile apps</li>
            </ul>
            
        </div>
    );
}

export default Main;