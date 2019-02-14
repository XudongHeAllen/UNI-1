import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

const DividerExampleVerticalForm = () => (
    <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
            <Grid.Column verticalAlign='middle' className = "App-header1">
                <Button content='Sign up' icon='signup' size='big' />
            </Grid.Column>
            <Grid.Column className = "App-header">
                <Form >
                    <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' />
                    <Form.Input icon='lock' iconPosition='left' label='Password' type='password' />

                    <Button content='Login' primary />
                </Form>
            </Grid.Column>
        </Grid>

    </Segment>
)

export default DividerExampleVerticalForm

// class App extends Component{
//   render() {
//     return (
//          <div className="container-fluid">
//           <div className="row">
//             <div className="col-lg-6">
//               <h3>UNI.</h3>
//               <div className="App-header">
//
//               <p>Lorem ipsum dolor..</p>
//                <p>Ut enim ad..</p>
//
//              </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="App">
//                   <div className="App-header">
//                   <form>
//                     <div className="form-group">
//                       <label>Email address</label>
//                       <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
//                     </div>
//                       <div className="form-group">
//                         <label >Password</label>
//                         <input type="password" className="form-control" placeholder="Password"/>
//                       </div>
//                       <button type="submit" className="btn btn-primary">Submit</button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//          </div>
//   );
//   }
// }
//
// export default App;
//
