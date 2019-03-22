import React from 'react';
import Modal from 'react-awesome-modal';
import '../../App.css';
import axios from "../../axios_def";

class UserActivities extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            attend : false,
            full : false
        }

        //TODO: how to know the creator of this activity, maybe need to change the structure of the database？


    }

    openModal() {
        console.log("Iam user: "+this.props.userID);
        //console.log(this.props.attendances.length);
        //console.log(this.props.attendances);
        //console.log(this.props.attendances[0]);

        let attend = false;
        let attendanceCount = this.props.attendances.length;
        let index = 0;

        while ( attendanceCount > 0){
            if(this.props.attendances[index] === this.props.userID){
                attend = true;
                console.log("success");
            }

            index = index + 1;
            attendanceCount = attendanceCount - 1;
        }

        this.setState({
            visible : true,
            attend: attend
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    joinActivityHandler = () => {
        //const id = this.props.activityID;
        // const token = this.props.token;
        //
        // console.log(token);
        //
        // const helper= {
        //     headers: {"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJVTkkiLCJzdWIiOiI1YzhmZmFhMGNkZDUyNDA4N2U3ZTNhNmYiLCJpYXQiOjE1NTMyMTMyODY0OTgsImV4cCI6MTU1MzI5OTY4NjQ5OH0.YVt982StxFLfesEka4_pYN8fm6221JEqiDNn7OtHSXo",
        //         "Content-Type": "application/json"}
        // };
        //
        // axios.put('/activities/activity/attend/5c9176bacdd524087e7e3a9e', { headers: {"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJVTkkiLCJzdWIiOiI1YzhmZmFhMGNkZDUyNDA4N2U3ZTNhNmYiLCJpYXQiOjE1NTMyMTMyODY0OTgsImV4cCI6MTU1MzI5OTY4NjQ5OH0.YVt982StxFLfesEka4_pYN8fm6221JEqiDNn7OtHSXo",
        //         "Content-Type": "application/json"}}).then(res => {
        //     console.log(res.data);
        // }).catch((error) => {
        //     console.log(error);
        // });
        const token = this.props.token;

        console.log("this is the token: "+token);

        const helper= {
            headers: {"Authorization": '' + token}
        };

        axios.get('/users/user/activities/attending',helper).then(res => {
            const activities = res.data.activities;
            console.log(activities);
            console.log(token);
        }).catch((error) => {
            console.log(error);
        });


        console.log("this is the end");

        // axios.put('/activities/activity/attend/5c9176bacdd524087e7e3a9e',helper).then(res => {
        //     const activities = res.data.activities;
        //     console.log(activities);
        //     console.log(token);
        // }).catch((error) => {
        //     console.log(error);
        // });

        //console.log(this.props.activityID);
        //console.log("joined");
    };


    render() {

        return (
            <div className='item'>
                <div className="content">
                    <button
                        type="button"
                        id="link-button"
                        onClick={() => this.openModal()}>
                        {this.props.title}
                    </button>
                    <div className="description">
                        category: {this.props.category}
                    </div>
                    <div className="extra">
                        time: {this.props.time}
                    </div>

                    <Modal
                        visible={this.state.visible}
                        width="400"
                        height="300"
                        effect="fadeInUp"
                        onClickAway={() => this.closeModal()}
                    >

                        <div>
                            <div className="item">
                                <div className="content">
                                    <div className="header">
                                        TITLE: {this.props.title}
                                    </div>
                                    <div className="meta">
                                        <span className="cinema">LOCATION: {this.props.location}</span>
                                    </div>
                                    <div className="description">
                                        <li>WHO: {this.props.attendances}</li>
                                        <li>category: {this.props.category}</li>
                                        <li>createdTime: {this.props.createdTime}</li>
                                        <li>description: {this.props.description}</li>
                                    </div>
                                    <div className="extra">
                                        <div className="ui label">MAX: {this.props.capacity}</div>
                                        <br/>
                                        <div className="ui label">
                                            <i className="globe icon"/> ACTIVITY TIME: {this.props.time}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br/>

                            {!this.state.attend && (
                                <button
                                    className='small ui primary button'
                                    onClick={this.joinActivityHandler}>
                                    Join
                                </button>
                            )}

                            {this.state.attend && (
                                <button
                                    className='small ui primary button'
                                    onClick={() => this.closeModal()}>
                                    unJoin
                                </button>
                            )}

                            <button
                                className='small ui primary button'
                                onClick={() => this.closeModal()}>
                                close
                            </button>

                        </div>


                    </Modal>
                </div>
            </div>
        );
    }

}

export default UserActivities;