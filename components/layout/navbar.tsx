"use client";

import { useState } from "react";
import { HamburgerIcon , ArrowRight } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    
    return (
        <>
        {/* MAIN NAVBAR */}
        <nav className="fixed top-0 left-0 w-full z-30 flex justify-between items-center px-4 md:px-6 py-4 text-sm bg-white/70 backdrop-blur-xl">
            <h1 className="font-bold text-xl">PLACEHOLDER</h1>

            {/* Desktop */}
            <ul className="rounded-full p-1 hidden md:block">
                <li className="inline-block hover:bg-gray-100 transition py-2 px-6 rounded-full cursor-pointer">Home</li>
                <li className="inline-block hover:bg-gray-100 transition py-2 px-6 rounded-full cursor-pointer">About</li>
                <li className="inline-block hover:bg-gray-100 transition py-2 px-6 rounded-full cursor-pointer">Contact</li>
            </ul>

            <button className="bg-black text-white hover:bg-neutral-700 transition-all duration-300 cursor-pointer py-2 px-6 rounded-full shadow-lg hidden md:block">
                View Shop
            </button>

            {/* Mobile button */}
            <HamburgerIcon 
                className="block md:hidden cursor-pointer" 
                onClick={() => setOpen(!open)}
            />
        </nav>

        {/* MOBILE MENU*/}
        {open && (
            <div className="fixed top-0 left-0 w-full min-h-screen bg-black z-50 flex flex-col space-y-10 p-6">
                
                {/* Top bar */}
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-white text-xl">PLACEHOLDER</h1>

                    <ArrowRight 
                        className="text-white cursor-pointer"
                        onClick={() => setOpen(false)}
                        size={36}
                    />
                </div>

                {/* Menu */}
                <ul className="text-2xl text-white space-y-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            </div>
            )}
        </>
    );
}