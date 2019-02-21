/*App.js is going to be a router dispatcher*/
import React from 'react'
import { Form, Grid, Segment, Container } from 'semantic-ui-react'

const App = () => (
    <Segment placeholder >
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
                <Form>
                    <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' />
                    <Form.Input icon='lock' iconPosition='left' label='Password' type='password' />
                    <button className='medium ui primary button'>Login</button>
                    <br/>
                    <button className="ui labeled icon primary button" size='huge'>
                        <i className="chess rook icon"></i>
                        Sign UP
                    </button>

                </Form>
            </Grid.Column>

        </Grid>

    </Segment>
)

export default App