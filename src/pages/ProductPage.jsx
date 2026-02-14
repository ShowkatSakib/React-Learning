import React from 'react';
import Menu from '../components/Menu';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    
    let {id, name}= useParams();    //use to read url parameter
    return (
        <div>
            <Menu/>
            <p>ID:{id}</p>
            <p> Name:{name}</p>
            <h1> This is product page </h1>
        </div>
    );
};

export default ProductPage;