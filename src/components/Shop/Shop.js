import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className='flex gap-2'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-5 w-full m-5'>
                {/* <div className='border-2 border-red-600 p-5'>Hellow</div> */}

                {
                    products.map((product) => <Product
                        product={product}
                        handleAddToCart={handleAddToCart}
                        key={product.id}
                    />)
                }

            </div>
            <div className='w-3/12 h-96 text-center bg-orange-300 p-5'>
                <h3 className='text-lg font-bold'>Order Summery</h3>
                <h4 className='text-lg font-semibold'>Total selected Cart: {cart.length}</h4>

            </div>
        </div>





        //     <div className='flex gap-2'>
        //         <div className='grid grid-cols-1 md:grid-cols-3 border-2 border-blue-900 gap-4 p-5 w-full m-5'>
        //             <div className='border-2 border-red-600 p-5'>Hellow</div>
        //             <div className='border-2 border-red-600 p-5'>Hellow</div>
        //             <div className='border-2 border-red-600 p-5'>Hellow</div>
        //             <div className='border-2 border-red-600 p-5'>Hellow</div>
        //             <div className='border-2 border-red-600 p-5'>Hellow</div>
        //         </div>
        //         <div className='border-2 border-blue-900 p-5'>
        //             <div className='border-2 border-red-600 p-5'>Hellow</div>
        //         </div>
        //     </div>
    );
};

export default Shop;