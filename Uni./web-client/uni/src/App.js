import React from 'react'
import { Form } from 'semantic-ui-react'

const GridExampleVerticallyDivided = () => (
    <div class="ui two column middle aligned purple grid" style={{height: '100vh'}}>
        <div class="row" >
            <div class="olive column" >
                <div className="ui  three column grid" style={{height: '100vh'}}>
                    <div className="column">
                    </div>
                    <div className="middle aligned column">
                        <button class="ui labeled icon primary button"  size='huge'>
                            <i class="chess rook icon"></i>
                            Sign UP
                        </button>
                    </div>
                    <div className="column">
                    </div>
                </div>
            </div>

            <div class=" column">
                <div class="ui three column grid" style={{height: '100vh'}}>
                    <div className=" column">
                    </div>
                    <div className=" middle aligned column">
                        <Form>
                            <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' />
                            <Form.Input icon='lock' iconPosition='left' label='Password' placeholder='Password' type='password' />
                            <button class='medium ui right floated primary button'>Login</button>
                        </Form>
                    </div>
                    <div className="column">
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default GridExampleVerticallyDivided