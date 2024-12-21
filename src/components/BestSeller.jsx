import React, { useState } from 'react'
import { products } from '../assets/frontend_assets/assets';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {producks} = useContext(ShopContext);
    const {bestSeller, setBestSeller} = useState([]);
    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[])
    return(
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis suscipit nesciunt necessitatibus dolore molestiae quo recusandae aliquid corrupti quasi, quos soluta. Saepe, dolores suscipit ex minima qui praesentium veritatis perspiciatis rem dignissimos tempore, amet, obcaecati autem eaque asperiores odit officia rerum unde voluptatum delectus cupiditate tenetur. Modi ipsam delectus doloribus.
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item,index)=>(
                        <ProductItem key={index} id={item._id} name={item.name} image={item.img} price={item.price}/>
                    ))
                }

            </div>

        </div>
    )
}
export default BestSeller 