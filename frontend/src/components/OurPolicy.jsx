import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-6 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      {/* Policy 1 */}
      <div className='group transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 p-6 rounded-xl hover:shadow-lg'>
        <img 
          src={assets.exchange_icon} 
          className='w-12 m-auto mb-5 transition-transform duration-300 group-hover:rotate-12' 
          alt="Exchange Icon" 
        />
        <p className='font-semibold transition-colors duration-300 group-hover:text-black'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>

      {/* Policy 2 */}
      <div className='group transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 p-6 rounded-xl hover:shadow-lg'>
        <img 
          src={assets.quality_icon} 
          className='w-12 m-auto mb-5 transition-transform duration-300 group-hover:scale-110' 
          alt="Quality Icon" 
        />
        <p className='font-semibold transition-colors duration-300 group-hover:text-black'>7 Days Return Policy</p>
        <p className='text-gray-400'>We provide 7 days free return policy</p>
      </div>

      {/* Policy 3 */}
      <div className='group transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 p-6 rounded-xl hover:shadow-lg'>
        <img 
          src={assets.support_img} 
          className='w-12 m-auto mb-5 transition-transform duration-300 group-hover:-rotate-12' 
          alt="Support Icon" 
        />
        <p className='font-semibold transition-colors duration-300 group-hover:text-black'>Best customer support</p>
        <p className='text-gray-400'>we provide 24/7 customer support</p>
      </div>

    </div>
  )
}

export default OurPolicy
