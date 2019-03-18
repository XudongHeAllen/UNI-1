import React from "react";
import { Segment } from "semantic-ui-react";
import UserActivity from './UserActivities';
import Sidebar from "./Sidebar";
import "../../userpage.css";
import axios from "../../axios_def";
import CreateActivity from './CreateActivity'

//section 3, lecture 47

//keep as many stateless components as possible. this is stateful.
class UserPage extends React.Component {
    state = {
        activities: [],
        displayCreateModal:false
    };

    createActivityHandler = () => {
        this.refs.createModal.open();

    };

    showActivityHandler = () =>{
        alert('pop up this activity details(another component!)');
    };

    componentDidMount() {
        axios.get('/activities').then(res => {
            const activities = res.data.activities;
            this.setState({ activities });
        });
    }


    render()
    {
        return (
            <div id="App">
                <CreateActivity ref ="createModal" token = {this.props.location.state.token} display={this.state.displayCreateModal} />
                <Sidebar 
                    pageWrapId={"page-wrap"} 
                    outerContainerId={"App"}
                    width={ "25%" }
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

                        <div className='ui items'>
                            {
                                this.state.activities.map(
                                    activity => <UserActivity
                                                    key={activity._id}
                                                    category={activity.category}
                                                    title={activity.title}
                                                    time={activity.activity_datetime}
                                                    click={this.showActivityHandler}
                                    />
                                )
                            }
                        </div>
                    </Segment>
                </div>
            </div>
        )
    }
}

export default UserPage
