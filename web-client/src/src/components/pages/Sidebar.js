import React from 'react';
import { Image, Label, Card, Icon } from 'semantic-ui-react'
import { push as Menu } from 'react-burger-menu';

// import "../../sidebar.css";

export default props => {

    return(
        <Menu {...props}> 
        
            <a className="menu-item" href="/create">
                Create
            </a>
            <a className="menu-item" href="/edit">
                Edit
            </a>
            <a className="menu-item" href="/search">
                Search
            </a>
            <a className="menu-item" href="/">
                Sign Out
            </a>
          
        </Menu>
    );
}