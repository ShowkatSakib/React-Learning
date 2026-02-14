import React from 'react';
import { NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li> <NavLink className={({isActive})=> isActive?"active-item":"pending-item"} to="/">Home</NavLink></li>
                <li> <NavLink className={({isActive})=> isActive?"active-item":"pending-item"} to="/product/10/Cake">Product</NavLink></li>
                <li> <NavLink className={({isActive})=> isActive?"active-item":"pending-item"} to="/profile/showkat sakib">Profile</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;