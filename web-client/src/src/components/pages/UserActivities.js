import React from 'react';

const UserActivities = (props) => {
    return (
        <div className='item'>
            <div className="content">
                <a className="header" onClick={props.click}>{props.title}</a>
                <div className="description">
                    category: {props.category}
                </div>
                <div className="extra">
                    time: {props.time}
                </div>
            </div>

        </div>
    )
};

export default UserActivities;