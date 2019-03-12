import React from "react";
import { Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import UserActivity from './UserActivities';
import Sidebar from "./Sidebar";
import "../../userpage.css";

//section 3, lecture 47

//keep as many stateless components as possible. this is stateful.
class UserPage extends React.Component {
    state = {
        activities: [
            { name: 'yinka', cate: 'study'},
            { name: 'cj', cate: 'soccer'}
        ]
    };

    createActivityHandler = () => {
        alert('pop up create activity component!');
    };

    showActivityHandler = () =>{
        alert('pop up this activity details(another component!)');
    };

    render()
    {
        const data = this.state;
        return (
            <div id="App">
                <Sidebar 
                    pageWrapId={"page-wrap"} 
                    outerContainerId={"App"}
                    name={this.props.location.state.stateName} 
                />
                <div id="page-wrap">
                    <Segment>
                        <h2>welcome, {this.props.location.state.stateName}!</h2>
                        <button
                            className='medium ui primary button'
                            onClick={this.createActivityHandler}>
                            Create Activity
                        </button>
                        <UserActivity
                            name={data.activities[0].name}
                            cate={data.activities[0].cate}
                            click={this.showActivityHandler}/>
                        <UserActivity
                            name={data.activities[1].name}
                            cate={data.activities[1].cate}/>
                        <Link to ='/' >Log out</Link>
                    </Segment>
                </div>
                
            </div>
        )
    }
}

export default UserPage
