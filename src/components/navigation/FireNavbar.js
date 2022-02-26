import {React, useState} from 'react';
import Link from 'next/link'

function FireNavbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    return (

        /* navbar */
        <nav className="bg-gray-700">
            {/*margin: auto(centers the div withn the nav)   */}
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        {/* logo */}
                        <div className="group">
                            <a
                                href="#"
                                className="flex items-center py-5 px-2 text-white transition delay-75 ease-in-out group-hover:text-gray-200"
                            >
                                <svg
                                    className=" h-7 w-7 mr-1 text-red-700 transition delay-75 ease-in-out  group-hover:text-cyan-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                                    />
                                </svg>
                                <span className="font-bold">
                                    LFG With Tailwind CSS
                                </span>
                            </a>
                        </div>

                        {/* primary nav */}
                        <div className=" hidden md:flex flex items-center space-x-1">
                            <a
                                className="py-5 px-3 text-white hover:text-gray-200"
                                href=""
                            >
                                Home
                            </a>
                            <a
                                className="py-5 px-3 text-white hover:text-gray-200"
                                href=""
                            >
                                About
                            </a>
                        </div>
                    </div>

                    {/* secondary nav */}
                    <div className=" hidden md:flex  flex items-center space-x-1">
                        <button className="btn btn-outline btn-accent m-1">
                            Connect
                        </button>
                    </div>

                    {/* mobile button goes here */}
                    <div className="md:hidden flex items-center text-white">
                        <button onClick={() =>setToggleMenu(true)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
            {/* mobile menu */}

            {toggleMenu ? (
                <div className="text-white">
                    <a
                        href="#"
                        className="block py-2 px-4 text-sm hover:bg-gray-200"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 text-sm hover:bg-gray-200"
                    >
                        Twitter
                    </a>
                </div>
            ) : (
                <></>
            )}
        </nav>




        /* navbar */
        // <nav className="bg-gray-700">
        //     {/*margin: auto(centers the div withn the nav)   */}
        //     <div className="max-w-6xl mx-auto px-4">
        //         <div className="flex justify-between">
        //             <div className="flex space-x-4">
        //                 {/* logo */}
        //                 <div className="group">

        //                 <Link href="/"><a className="flex items-center py-5 px-2 text-white transition delay-75 ease-in-out group-hover:text-gray-200 "
        //                          >   
        //                         <svg
        //                             className=" h-7 w-7 mr-1 text-red-700 transition delay-75 ease-in-out  group-hover:text-cyan-300"
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             fill="none"
        //                             viewBox="0 0 24 24"
        //                             stroke="currentColor"
        //                         >
        //                             <path
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth={2}
        //                                 d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        //                             />
        //                             <path
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth={2}
        //                                 d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
        //                             />
        //                         </svg>
        //                         <span className="font-bold">
        //                             LFG With Tailwind CSS
        //                         </span>
        //                     </a>
        //                     </Link>
        //                 </div>

        //                 {/* primary nav */}
        //                 <div className="flex items-center space-x-1">
        //                   <Link href="/">
        //                       <a className="py-5 px-3 text-white hover:text-gray-200">
        //                         Home
        //                     </a>
        //                     </Link>

        //                    <Link href ="/twitter">
        //                     <a
        //                         className="py-5 px-3 text-white hover:text-gray-200">
        //                         Twitter Side-Navbar
        //                     </a>
        //                     </Link>
        //                 </div>
        //             </div>

        //             {/* secondary nav */}
        //             <div className=" flex items-center space-x-1">
        //                 <button className="btn btn-outline btn-accent m-1">
        //                     Connect
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </nav>



    );

}

export default FireNavbar;