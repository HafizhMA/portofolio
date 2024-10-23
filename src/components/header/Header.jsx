import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleLinkClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    };

    return (
        <div className="navbar navbar-style">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                        <li><Link to='/' onClick={handleLinkClick}>Home</Link></li>
                        <li><Link to='/skills' onClick={handleLinkClick}>Skills</Link></li>
                        <li><Link to='/projects' onClick={handleLinkClick}>projects</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Portfolio</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/' onClick={handleLinkClick}>Home</Link></li>
                    <li><Link to='/skills' onClick={handleLinkClick}>Skills</Link></li>
                    <li><Link to='/projects' onClick={handleLinkClick}>projects</Link></li>
                </ul>
            </div>

            {/* <AnimatePresence>
                {isAnimating && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-screen bg-slate-600 border-2 border-black z-20"
                        initial={{ y: "100%" }} // Start bawah
                        animate={{ y: 0, transition: { duration: 0.5, ease: "circOut" } }} // animasi cover full
                        exit={{ y: "-100%", transition: { duration: 0.5, ease: "circIn" } }} // Exit atas
                    />
                )}
            </AnimatePresence> */}

            <AnimatePresence>
                {isAnimating && (
                    <motion.div
                        className="fixed top-0 left-0 flex justify-center w-full h-screen bg-slate-600 border-2 border-black z-20"
                        initial={{ y: "100%" }} // Mulai dari bawah layar
                        animate={{ y: 0, transition: { duration: 0.3, ease: "circOut" } }} // Naik menutupi layar
                        exit={{ y: "100%", transition: { duration: 0.3, ease: "circIn" } }} // Kembali turun ke bawah
                    >
                        <p className='text-6xl text-white'>Loading...</p>
                    </motion.div>
                )}
            </AnimatePresence>


        </div>
    );
};

export default Header;
