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

                        <button className=' m-2' onClick={handleToggle} >Components</button>



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