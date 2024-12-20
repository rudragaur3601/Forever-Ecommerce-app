import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
  const { products } = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])  // Initializing state with an empty array

  // Effect to set the latest products
  useEffect(() => {
    if (products.length > 0) {
      setLatestProducts(products.slice(0, 10))  // Taking the first 10 products
    }
  }, [])  // Adding products as a dependency to re-run the effect when products change

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={" COLLECTIONS"} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Stay ahead of the trends with our newest arrivals. From bold styles to timeless classics, our latest collection is designed to elevate your wardrobe and enhance your lifestyle. Whether you're looking for the perfect outfit for any occasion or adding fresh pieces to your everyday essentials, you'll find something you love. Explore now and find your next favorite look!
        </p>
      </div>

      {/* Rendering Products */}
      <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.map((item, index) => (
          <ProductItem 
            key={index} 
            id={item._id} 
            image={item.image} 
            name={item.name} 
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default LatestCollection
