"use client";

import { useState } from "react";
import { MenuIcon , ArrowRight } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
        {/* MAIN NAVBAR */}
        <nav className="fixed top-0 left-0 w-full z-30 flex justify-between items-center px-6 md:px-8 py-4 text-sm bg-transparent backdrop-blur-md md:backdrop-blur-none">
            <h1 className="font-bold text-xl">PLACEHOLDER</h1>

            {/* Desktop */}
            <ul className="backdrop-blur-xl rounded-full p-1 hidden md:block">
                <li className="inline-block hover:bg-gray-100 transition py-2 px-6 rounded-full">Home</li>
                <li className="inline-block hover:bg-gray-100 transition py-2 px-6 rounded-full">About</li>
                <li className="inline-block hover:bg-gray-100 transition py-2 px-6 rounded-full">Contact</li>
            </ul>

            <button className="bg-black text-white hover:bg-white hover:text-black transition py-2 px-6 rounded-full shadow-lg hidden md:block">
                View Shop
            </button>

            {/* Mobile button */}
            <MenuIcon 
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