import React from 'react';

const FuctionPass = (props) => {
    return (
        <div>
            <button onClick={props.childBtnClick}> Submit</button>
        </div>
    );
};

export default FuctionPass;