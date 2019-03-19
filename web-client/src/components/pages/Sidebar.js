import React from 'react';
import { Image, Label } from 'semantic-ui-react'
import { push as Menu } from 'react-burger-menu';


export default props => {

    return(
        <Menu {...props}> 
            {/* <Image src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' size='tiny' circular centered/>
            <Label basic pointing>
                <h4>{props.name}</h4>
            </Label> */}
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