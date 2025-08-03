import React from 'react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import { useState } from 'react'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [exploreOpen, setExploreOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
   
    return (
     <header className=' p-4 rounded-lg flex justify-between shadow-lg'>
            <h3 className='text-2xl font-bold hidden md:flex'>Frontend Mentor</h3>
        <nav className='hidden md:flex justify-between items-center'> 
            
             <ul className='flex space-x-4 relative'>
                {/* Explore */}
                <li 
                className='flex items-center gap-2'
                onClick={() => setExploreOpen(!exploreOpen)}
                //onMouseEnter={() => setExploreOpen(true)}
                //onMouseLeave={() => setExploreOpen(false) }
                >
                    <button className=' flex items-center gap-2 hover:text-gray-300 text-bold'>
                        Explore
                    <svg viewBox='0 0 20 20'
                     fill=' currentColor'
                     className='size-5 flex-none text-gray-400'
                     >
                        <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                    </svg>
                    </button>
                    {exploreOpen && (
                        <div className='absolute mt-40 w-48 bg-white rounded-md ring-1 ring-black ring-opacity-5'>
                           <div className='py-1'>
                            <a href="#" className='block flex text-bold px-4 py-2 hover:bg-gray-100'><img src="" alt="" />learning</a>
                            <a href="#" className='block px-4 flex py-2 text-bold hover:bg-gray-100'><img src="" alt="" />challenge</a>
                           </div>
                        </div>
                    )}
                </li>
               {/*Companies Dropdown*/}
                <li>
                    <button
                    onClick = {() => setCompanyOpen(!companyOpen)}
                    className='hover: text-gray-300  mt-2'
                    >
                    For Companies
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
                <li className='flex items-center text-black gap-2'><a href="" className='hover:text-gray-300 text-bold '>Unlock <span className='text-white bg-blue-500 px-2 py-1 rounded-md'>PRO</span></a></li>
                <li className='flex items-center rounded-md gap-2  p-2  '><button className='hover:text-gray-300 text-bold text-black '>Login with Github</button></li>
             </ul>
        </nav>
        <button className='md:hidden text-gray-500' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className = 'w-6, h-6' /> : <Bars3Icon className = 'w-6, h-6' />}
        </button>
        <li className='flex md:hidden items-center rounded-md gap-2  p-2  '><button className='hover:text-gray-300 text-bold text-black '>Login with Github</button></li>
        {
            isOpen && (
                <ul className='md:hidden flex flex-col gap-4'>
                    <li>
                        <button className='hover:text-gray-300' onClick={() => setExploreOpen(!exploreOpen)}>Explore</button>
                         {
                            exploreOpen && (
                                <div>
                                   <div className='py-1'>
                                        <a href="#" className='block flex text-bold px-4 py-2 hover:bg-gray-100'><img src="" alt="" />learning</a>
                                        <a href="#" className='block px-4 flex py-2 text-bold hover:bg-gray-100'><img src="" alt="" />challenge</a>
                                    </div> 
                                </div>
                            )
                         }
                    </li>
                    <li><button onClick={()=>{setCompanyOpen(!companyOpen)}} className='hover:text-gray-300'>Companies</button>
                    {companyOpen && (
                        <div className='absolute mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
                           <div className='py-1'>
                              <a href="#" className='block px-4 py-2 hover:bg-gray-100'>Hiring Solutions</a>
                              <a href="#" className='block px-4 py-2 hover:gray-100'>Partnership</a>
                           </div>
                        </div>
                    )}
                    </li>
                    <li><a href="" className='hover:text-gray-300'>Unlock <span className='b'>PRO</span></a></li>
                </ul>
                
            )
        }
     </header>
    )
}
export default Nav;