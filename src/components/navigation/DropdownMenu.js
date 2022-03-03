import { React, useState } from 'react';
import Link from 'next/link'
function DropdownMenu() {

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () => {
        setToggleMenu(prev => !prev)
    }

    return (
        <>

            <div className='flex flex-col'>
                <div className=' relative flex items-center text-white '>

                    <div>

                        {/* Main Button */}

                        <button className=' m-2 flex justify-center items-center' onClick={handleToggle} >
                            
                            <span> Components</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>



                    </div>



                </div>
                {toggleMenu ? (
                    <div className=' absolute top-14 flex flex-col bg-gray-100 w-28 p-3 rounded shadow-md space-y-2 '>

                        <Link href="/twitter">
                            <a
                                className="hover:bg-gray-200 text-xs text-gray-900">
                                Twitter Side-Navbar
                            </a>
                        </Link>




                    </div>) : (<></>)}
            </div>

        </>
    );
}

export default DropdownMenu;