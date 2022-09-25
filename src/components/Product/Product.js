import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = (props) => {
    // console.log(props)
    const { product, handleAddToCart } = props
    const { name, img } = product
    // console.log(product)
    return (
        <div className="flex justify-center relative">
            <div className="block rounded-lg shadow-lg bg-white max-w-sm">
                <img className='w-full p-2 h-[286px]' src={img} alt="" />
                <div className="mx-2">
                    <h5 className="text-gray-900 text-xl font-medium">{name}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                </div>
                <div className="border-gray-300 text-gray-600 mt-20">
                    <button onClick={() => handleAddToCart(product)} type="button" className="w-full inline-block p-3  bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out absolute bottom-0">Add To Cart <FontAwesomeIcon className='text-2xl' icon={faCartPlus} /></button>
                </div>
                {/* <button className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
            </div>
        </div>
    );
};

export default Product;