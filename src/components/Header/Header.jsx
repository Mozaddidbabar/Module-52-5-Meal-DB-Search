import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center bg-dark'>
            <Link className='text-decoration-none m-2' to='/'>Home</Link>
            <Link className='text-decoration-none' to='/restaurant'>Restaurants</Link>
        </div>
    );
};

export default Header;