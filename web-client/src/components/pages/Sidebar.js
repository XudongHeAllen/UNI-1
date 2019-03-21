import React from 'react';
import { Image, Label, Item, Icon, Card, Button, Header, Divider } from 'semantic-ui-react'
import { push as Menu } from 'react-burger-menu';

export default props => {

    return(

            <Menu {...props}> 
                {/* <Image src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' size='tiny' circular centered/>
                <Label basic pointing>
                    <h4>{props.name}</h4>
                </Label> */}
                
                {/* <Icon circular color="blue" name="user" size="big" /> */}
                <div id="headerGroup">
                    <Image 
                        id="img"
                        src='https://react.semantic-ui.com/images/wireframe/square-image.png' 
                        size='small' 
                        circular 
                        centered
                    />
                    <Header as="h3" id="label"> {props.email} </Header>
                </div>

                <div id="buttonGroup">
                    <Button
                        onClick={props.createActivity}
                        fluid
                        className="menu-button"
                        id="menuButton"  
                    >
                        Create
                    </Button>
                    
                    <Divider horizontal></Divider>
                    <Button 
                        fluid
                        id="menuButton"  
                    >
                        Edit   
                    </Button>
                    <Divider horizontal></Divider>
                    <Button 
                        fluid
                        id="menuButton" 
                    >
                        Search
                        
                    </Button>
                    <Divider horizontal></Divider>
                    <Button 
                        fluid
                        id="menuButton" 
                    >
                        Log Out
                        
                    </Button>
                </div>
                

                {/* <a id="menuItem" className="menu-item" href="/create">
                    Create
                </a> */}
                {/* <a id="menuItem" className="menu-item" href="/edit">
                    Edit
                </a>
                <a id="menuItem" className="menu-item" href="/search">
                    Search
                </a>
                <a id="menuItem" className="menu-item" href="/">
                    Sign Out
                </a> */}
            </Menu>
    );
}