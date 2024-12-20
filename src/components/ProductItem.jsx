import React, { useContext } from 'react'  // Importing useContext
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext)  // Accessing currency from ShopContext

    return (
        <Link 
            className='text-gray-700 cursor-pointer shadow-md transition-transform transform hover:scale-95 ease-in-out duration-200' 
            to={`/product/${id}`}
        >
            <div className='overflow-hidden'>
                {/* Image with hover scaling effect */}
                <img
                    className="rounded"
                    src={image[0]}
                    alt={name}
                />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    )
}

export default ProductItem