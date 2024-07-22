import React from 'react'
import { SlUser } from "react-icons/sl";
import { CiHeart, CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className='flex w-screen flex-row items-center xl:justify-between shadow-md px-10'>
            {/* left */}
            <div className='flex flex-row items-center'>
                <Link to={'/home'}>
                    <img
                        src="Images/logo.png"
                        alt=""
                        className='w-12'
                    />
                </Link>
                <div className='flex-row items-center w-[680px] ml-2'>
                    <p className='hidden sm:inline-block text-xs font-bold text-slate-700 p-6 py-8 border-b-4 border-white hover:cursor-pointer hover:border-b-red-700 transition duration-100'>MEN</p>
                    <p className='hidden sm:inline-block text-xs font-bold text-slate-700 p-6 py-8 border-b-4 border-white hover:cursor-pointer hover:border-b-red-700 transition duration-100'>WOMEN</p>
                    <p className='hidden md:inline-block text-xs font-bold text-slate-700 p-6 py-8 border-b-4 border-white hover:cursor-pointer hover:border-b-red-700 transition duration-100'>KIDS</p>
                    <p className='hidden md:inline-block text-xs font-bold text-slate-700 p-6 py-8 border-b-4 border-white hover:cursor-pointer hover:border-b-red-700 transition duration-100'>HOME & LIVING</p>
                    <p className='hidden lg:inline-block text-xs font-bold text-slate-700 p-6 py-8 border-b-4 border-white hover:cursor-pointer hover:border-b-red-700 transition duration-100'>BEAUTY</p>
                    <p className='hidden lg:inline-block text-xs font-bold text-slate-700 p-6 py-8 border-b-4 border-white hover:cursor-pointer hover:border-b-red-700 transition duration-100'>STUDIO</p>
                </div>
            </div>

            {/* right */}
            <div className='flex flex-row items-center'>
                <div className='flex flex-row items-center'>
                    <CiSearch />
                    <input type="text" placeholder='Search..' />
                </div>
                <div className='flex flex-row items-center'>
                    <div className='flex flex-col items-center'>
                        <SlUser />
                        <p>Profile</p>
                    </div >
                    <div className='flex flex-col items-center'>
                        <CiHeart />
                        <p>Wishlist</p>
                    </div>
                    <Link to={'/cart'}>
                        <div className='flex flex-col items-center'>
                            <HiOutlineShoppingBag />
                            <p>Bag</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header