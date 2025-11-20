import { images } from '@/assets/assets'

const Navbar = () => {

  return (
    <header className='w-full'>

  {/* Logo && Title */}
    <div className='max-w-7xl mx-auto py-6 p-4 flex items-center justify-between'>
      <div className='flex items-center gap-1 cursor-pointer'>
        <img className='w-6' src={images.logo} alt='logo/floravision' />
        <div className='font-semibold text-lg'>FloraVision.</div>
      </div>
  
  {/* Navbar with font-family --> Indie Flower */}
      <nav className='relative group font-navbar'>
        <ul className='hidden md:flex items-center gap-8 font-regular text-sm text-white'>
          <a href='home' className='cursor-pointer'>Home</a>
          <a href='plant-type' className='cursor-pointer flex items-center gap-2'>Plants type 
            <li className='w-0 h-0 rounded-sm
          border-t-5 border-t-transparent
          border-b-5 border-b-transparent 
          border-l-5 border-l-white rotate-90'></li>
          </a>
          <a href='more' className='cursor-pointer'>More</a>
          <a href='contact' className='cursor-pointer'>Contact</a>
        </ul>
      </nav>
    
  {/* Search && Cart */}
      <div className='flex items-center gap-6'>
        <img className='w-4 cursor-pointer' src={images.search} alt='search_icon'/>
        <img className='w-4 cursor-pointer' src={images.bagIcon} alt='bag_icon' />
  
  {/* Hamburger */}
      <button className='relative flex flex-col items-end gap-1 w-5 h-3 group'>
        <span className='absoulte top-5 right-2 w-5 h-0.5 bg-white rounded-full group-hover:bg-blue-400'></span>
        <span className='absoulte top-5 right-2 w-3 h-0.5 bg-white rounded-full group-hover:bg-blue-400'></span>
      </button>
        
      </div>
    </div> 
  </header>
  
  )
}

export default Navbar
