import React from 'react';

const ObjectPass = (props) => {
    return (
        <div>
            <li> Name:{props.item['name']} </li>
            <li> Age:{props.item['age']} </li>
            <li> City:{props.item['city']} </li>
        </div>
    );
};

export default ObjectPass;