import React from "react"
import {Segment, Grid, Container, Form } from "semantic-ui-react"
import InlineError from "../messages/InlineError"
//import { withRouter } from 'react-router-dom'

//this is a function component
class HomePage extends React.Component{
    state={
        data:{
            username:'',
            password:''
        },
        loading:false,
        errors:{}
    };

    onChange = e => this.setState({ data: {...this.state.data,
        [e.target.name]: e.target.value}
    });

    //validate data, pass it to submit function(backend),handle error cases.
    onSubmit = () => {
        const errors = this.validate(this.state.data);
        //set to the state
        this.setState({errors});
        //if no error submit to backend.
        if(Object.keys(errors).length === 0){
            //TODO: DO NOT KNOW HOW RIGHT NOW.
            //watch video starts from 32:50
        }
    };

    //implement late for all validations
    //validate email needs to install validator. yarn add validator
    //import validator from 'validator'
    validate = () => {
        const errors = {};
        if(!this.state.data.username) errors.username = "username can not be empty";
        if(!this.state.data.password) errors.password = "password can not be empty";
        return errors
    };

    render()
    {
        const { data, errors } = this.state;
        return (
            <Segment placeholder>
                <Grid style={{height: '100vh'}}>
                    <Grid.Column width={8} color={'blue'}>
                        <Container textAlign='center'>
                            <h1 style={{height: '20vh'}}>Uni.</h1>
                            <h1 style={{height: '10vh'}}>Follow your interests</h1>
                            <h1 style={{height: '10vh'}}>Safe and monitored environment</h1>
                            <h1 style={{height: '10vh'}}>Meet people</h1>
                            <h1 style={{height: '10vh'}}>Join the conversation</h1>
                        </Container>
                    </Grid.Column>

                    <Grid.Column width={8} verticalAlign='middle'>
                        <Form onSubmit = {this.onSubmit}>
                            <Form.Field error={!!errors.username}>
                                <Form.Input
                                    icon='user'
                                    iconPosition='left'
                                    label='Username'
                                    placeholder='Username'
                                    name='username'
                                    value={data.username}
                                    onChange={this.onChange}
                                />
                                {errors.username && <InlineError text={ errors.username}/>}
                            </Form.Field>
                            <Form.Field error={!!errors.password}>
                                <Form.Input
                                    icon='lock'
                                    iconPosition='left'
                                    label='Password'
                                    type='password'
                                    name='password'
                                    placeholder='password'
                                    value={data.password}
                                    onChange={this.onChange}
                                />
                                {errors.password && <InlineError text={ errors.password}/>}
                            </Form.Field>
                            <button className='medium ui primary button'>
                                Login
                            </button>
                            <br/>

                        </Form>
                        <button className="ui labeled icon primary huge button">
                             <i className="chess rook icon"/>Sign UP
                        </button>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

export default HomePage

