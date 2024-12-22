import React, { useState, useEffect, useContext } from 'react';
import ProductItem from './ProductItem';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const BestSeller = () => {
    const { products } = useContext(ShopContext); // Access products from context
    const [bestSeller, setBestSeller] = useState([]); // Use state to hold filtered best sellers

    useEffect(() => {
        // Filter the products to find the best sellers
        const bestProduct = products.filter((item) => item.bestseller);  // . bestseller exists in assets.js
        setBestSeller(bestProduct.slice(0, 5)); // Set the top 5 best sellers
    }, []); // Re-run effect when products change

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={' SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Shop our most popular products—top-rated and loved by customers for their unbeatable quality and performance! Don’t miss out on what everyone is raving about.
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSeller.map((item, index) => (
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))}
            </div>
        </div>
    );
};

export default BestSeller;
