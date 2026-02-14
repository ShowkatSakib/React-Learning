import React from 'react';
import Menu from '../components/Menu';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {

    let {facebookID}= useParams();
    return (
        <div>
            <Menu/>
            <p> Facebook Id: {facebookID}</p>
            <h1> This is profile page </h1>
        </div>
    );
};

export default ProfilePage;