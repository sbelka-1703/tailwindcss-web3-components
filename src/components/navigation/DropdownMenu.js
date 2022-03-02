import {React, useState} from 'react';

function DropdownMenu() {
   


    return (
        <>
            <div className='flex flex-col'>
                <div className=' relative flex items-center text-white '>

                    <div>

                        {/* Main Button */}

                        <button className=' m-2' >Components</button>



                    </div>



                </div>
                <div className=' absolute top-14 flex flex-col bg-gray-100 w-28 p-3 rounded shadow-md '>
                    <a href="#" className='hover:bg-gray-200'>Test1</a>
                    <a href="#" className='hover:bg-gray-200'>Test2</a>


                </div>
            </div>
        </>
    );
}

export default DropdownMenu;