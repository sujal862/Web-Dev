import React from 'react';
import { useParams } from 'react-router-dom';


function User() {
    const {userid} = useParams(); //returns an object of key/value pairs of URL parameters.   
    return (
        <div className='bg-gray-500 text-white text-3xl p-4 text-center' >User : {userid}</div>
    );
}

export default User;