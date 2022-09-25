import React from 'react';
import logo from '../../images/Logo.svg'

const Navbar = () => {
    return (
        <nav className='h-16 bg-slate-900 flex justify-between items-center px-20'>
            <img src={logo} alt="" />
            <div className='text-white flex gap-7 text-xl'>
                <a className='hover:text-orange-600 duration-500' href="/home">Home</a>
                <a className='hover:text-orange-600 duration-500' href="/ordrer">Order</a>
                <a className='hover:text-orange-600 duration-500' href="/shop">Shop</a>
                <a className='hover:text-orange-600 duration-500' href="/inventory">Inventory</a>
            </div>
        </nav>
    );
};

export default Navbar;