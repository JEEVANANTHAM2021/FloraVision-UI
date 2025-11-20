import React from 'react'
import { images } from '@/assets/assets'


const Footer = () => {
  return (
    <footer className='py-16 px-6 md:px-10'> 
     <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start'>
      
    {/* logo && Title */}
        <div className='space-y-5'>
          <div className='flex items-center gap-3'>
            <img className='w-14 h-14' src={images.logo} alt='FloraVision' />
            <h2 className='font-black text-4xl'>FloraVision.</h2>
          </div>
          <p>"From lush indoor greens to vibrant outdoor blooms, 
          our plants are crafted to thrive and elevate your living environment."</p>
        </div>

    {/* Quick Link's for navigate to sections */}
        <div className='space-y-4 lg:text-center'>
          <h3 className='text-2xl font-extrabold'>Quick Link's</h3>
          <ul className='space-y-3 lg:text-base'>
           <li><a href="#home" className='border-b'>Home</a></li>
           <li><a href="#types" className='border-b'>Type's of Plant's</a></li>
           <li><a href="#contact" className='border-b'>Contact</a></li>
           <li><a href="#privacy" className='border-b'>Privacy</a></li>
          </ul>
        </div>

    {/* Subscribe Box ---> for Updates  */}
      <div className='space-y-5'>
      <h3 className='text-2xl font-extrabold'>For Every Update.</h3>
        <form className='flex flex-row gap-3 max-w-sm border border-white rounded-sm'>
            <input className='flex-1 w-full outline-none' type='email' placeholder='Enter your email' required/>
            <button type='submit' className='bg-white text-black text-xs rounded-lg px-10 py-4'>SUBSCRIBE</button>
        </form>
      </div>

    {/* Social Media Links && Noted shortcuts */}
        <div className='flex gap-6 text-white font-bold'>
            <span className='cursor-pointer'>FB</span>
            <span className='cursor-pointer'>TW</span>
            <span className='cursor-pointer'>LI</span>
        </div>

    {/* Reserve && Rights */}
        <span></span>
        <p className='text-sm font-medium sm:text-center'>FloraVision © all right reserve</p>
    </div>
    </footer>
      
  )
}

export default Footer
