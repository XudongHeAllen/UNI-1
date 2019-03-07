import React from 'react';

//when use class-based components, it is this.props
//props.children renders B/W opening and closing components
const UserActivities = (props) => {
    return (
        <div className="ui placeholder segment" onClick={props.click}>
            <p>this is author. {props.name}</p>
            <p>this is an activity. {props.cate}</p>
        </div>
    )
};

export default UserActivities;