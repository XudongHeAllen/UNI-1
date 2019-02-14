import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'


class App extends Component{
    render() {
        return (
            <div className= 'ui placeholder segment'  >
                <div className='ui two column stackable center aligned grid' >
                    <div  className = 'B'  >

                        <div className = 'App-header1'>
                            <h1> UNI. </h1>
                            <div className="ui list">
                                <div className="item" id = "a">
                                    <i className="search icon"/>
                                    <div className="content">
                                        Follow your interests
                                    </div>
                                </div>
                                <div className="item" id = "a">
                                    <i className="university icon"/>
                                    <div className="content">
                                        Safe and monitored envirnoment.
                                    </div>
                                </div>
                                <div className="item" id = "a">
                                    <i className="users icon"/>
                                    <div className="content">
                                        Meet people.
                                    </div>
                                </div>
                                <div className="item" id = "a">
                                    <i className="conversation icon"/>
                                    <div className="content">
                                        Join the conversion
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div  className = 'B'  >
                        <div className = 'App-header'>
                            <Form  className ='B' >
                                <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' />
                                <Form.Input icon='lock' iconPosition='left' label='Password' type='password' />

                                <Button content='Login' primary />
                            </Form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;

