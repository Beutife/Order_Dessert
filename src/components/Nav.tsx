import React from 'react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import { useState } from 'react'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [exploreOpen, setExploreOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
    
    
    return (
     <header className='bg-gradient-to-r from-orange-400 to-pink-400 p-4 rounded-lg flex justify-between shadow-lg sticky top-0 z-50'>
            <h3 className='text-2xl font-bold hidden md:flex text-white'>Sweet Treats</h3>
        <nav className='hidden md:flex justify-between items-center'> 
            
             <ul className='flex space-x-4 relative'>
                {/* Explore */}
                <li 
                className='flex items-center gap-2'
                onClick={() => setExploreOpen(!exploreOpen)}
                //onMouseEnter={() => setExploreOpen(true)}
                //onMouseLeave={() => setExploreOpen(false) }
                >
                    <button className='flex items-center gap-2 hover:text-orange-200 text-white font-semibold transition-colors'>
                        Menu
                    <svg viewBox='0 0 20 20'
                     fill='currentColor'
                     className='size-5 flex-none text-white'
                     >
                        <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                    </svg>
                    </button>
                    {exploreOpen && (
                        <div className='absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50'>
                           <div className='py-1'>
                            <a href="#" className='block px-4 py-2 hover:bg-orange-50 text-gray-700 font-medium'>Cakes</a>
                            <a href="#" className='block px-4 py-2 hover:bg-orange-50 text-gray-700 font-medium'>Pastries</a>
                            <a href="#" className='block px-4 py-2 hover:bg-orange-50 text-gray-700 font-medium'>Ice Cream</a>
                            <a href="#" className='block px-4 py-2 hover:bg-orange-50 text-gray-700 font-medium'>Beverages</a>
                           </div>
                        </div>
                    )}
                </li>
               {/*Companies Dropdown*/}
                <li>
                    <button
                    onClick = {() => setCompanyOpen(!companyOpen)}
                    className=' hover:text-orange-200 text-white font-semibold transition-colors'
                    >
                    About Us
                    </button>
                    {companyOpen && (
                        <div className='absolute mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
                           <div className='py-1'>
                              <a href="#" className='block px-4 py-2 hover:bg-gray-100'>Hiring Solutions</a>
                              <a href="#" className='block px-4 py-2 hover:gray-100'>Partnership</a>
                           </div>
                        </div>
                    )}
                </li>
                <li className='flex items-center gap-2'>
                    <a href="" className='hover:text-orange-200 text-white font-semibold transition-colors'>
                        Special Offers <span className='text-orange-200 bg-white px-2 py-1 rounded-md text-sm'>NEW</span>
                    </a>
                </li>
                <li className='flex items-center rounded-md gap-2 p-2'>
                    <button className='hover:text-orange-200 text-white font-semibold transition-colors'>
                        Contact Us
                    </button>
                </li>
             </ul>
        </nav>
        <button className='md:hidden text-white' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
        {isOpen && (
            <div className='absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg p-4 z-50'>
                <ul className='flex flex-col gap-4'>
                    <li>
                        <button className='text-gray-700 hover:text-orange-500 font-medium' onClick={() => setExploreOpen(!exploreOpen)}>
                            Menu
                        </button>
                        {exploreOpen && (
                            <div className='mt-2 ml-4'>
                                <a href="#" className='block py-2 text-gray-600 hover:text-orange-500'>Cakes</a>
                                <a href="#" className='block py-2 text-gray-600 hover:text-orange-500'>Pastries</a>
                                <a href="#" className='block py-2 text-gray-600 hover:text-orange-500'>Ice Cream</a>
                                <a href="#" className='block py-2 text-gray-600 hover:text-orange-500'>Beverages</a>
                            </div>
                        )}
                    </li>
                    <li>
                        <button onClick={() => setCompanyOpen(!companyOpen)} className='text-gray-700 hover:text-orange-500 font-medium'>
                            About Us
                        </button>
                        {companyOpen && (
                            <div className='mt-2 ml-4'>
                                <a href="#" className='block py-2 text-gray-600 hover:text-orange-500'>Our Story</a>
                                <a href="#" className='block py-2 text-gray-600 hover:text-orange-500'>Contact</a>
                            </div>
                        )}
                    </li>
                    <li>
                        <a href="" className='text-gray-700 hover:text-orange-500 font-medium'>
                            Special Offers
                        </a>
                    </li>
                </ul>
            </div>
        )}
     </header>
    )
}
export default Nav;