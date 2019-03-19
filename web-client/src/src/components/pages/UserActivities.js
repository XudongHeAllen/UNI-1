import React from 'react';
import Modal from 'react-awesome-modal';
import '../../App.css';

class UserActivities extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

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

                            <button
                                className='small ui primary button'
                                onClick="">
                                Join
                            </button>
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