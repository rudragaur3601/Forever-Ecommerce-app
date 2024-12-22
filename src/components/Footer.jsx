import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div >
    <div className='grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-6 sm:gap-14 my-10 sm:mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-40' alt=""/>
            <p className='w-full md:w-2/3 text-gray-600'>
                We are dedicated to bringing you the latest and most stylish products to elevate your lifestyle. Our collection is carefully curated to offer quality, comfort, and fashion-forward designs. Whether you're shopping for essentials or looking for that perfect statement piece, we've got you covered. Thank you for choosing us for your fashion journey!
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>HOME </li>
                <li>ABOUT US</li>
                <li>DELIVERY</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>
    </div>
        <div >
            <hr/>
            <p className='text-sm py-5 text-center w-full'> Copyright 2024@ forever.com - All Right Reserved</p>
        </div>

</div>


  )
}

export default Footer