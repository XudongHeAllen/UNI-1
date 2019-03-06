import React from "react"
import { Segment } from "semantic-ui-react"
import { Link } from "react-router-dom"

//this is a function component
// const UserPage = () => (
//     <div>
//         <h1>this is a user Page</h1>
//         <h1>{this.props.location.state.detail}</h1>
//     </div>
// );

class UserPage extends React.Component {
    render()
    {
        return (
            <Segment>
                <h2>welcome, {this.props.location.state.detail.username}!</h2>
                {/*
                    TODO: wait for backend done.
                    we need to send get request to server, then server fetches data from mongoDB
                */}
                <h1>There are no activities going on now.</h1><br/>
                <button className='medium ui primary button'>
                    Create Activity
                </button>
                <br/><br/><br/>
                <Link to ='/' >Log out</Link>
            </Segment>
        )
    }
}

export default UserPage
/*
npm install --save axios
create an instance of axios
 */