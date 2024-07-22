import React from 'react'
import { IoIosStar } from "react-icons/io";

function OneProduct(props) {

    const { productImage, productRating, productBrand, productPrice,
        productName, productDiscount } = props

    let productCustomers = parseInt((Math.random() * 10) + 1)

    return (
        <div className='w-52 h-fit m-2 group hover:shadow-2xl hover:cursor-pointer'>
            <div className='relative'>
                {/* images /images slideshow */}
                <img
                    src={productImage}
                    alt={productImage}
                    className='z-0 h-72 w-full object-contain'
                />

                {/* add to cart button */}
                <div className='absolute hidden group-hover:flex p-3 bg-white z-50 bottom-0 w-full'>
                    <button className='bg-white w-full p-2 text-sm font-bold border-2 border-slate-300 rounded-sm'>Add to Cart</button>
                </div>

                {/* ratings */}
                <h1 className='absolute flex group-hover:hidden text-xs font-bold flex-row items-center bg-white opacity-80 rounded-sm z-50 p-1.5 w-fit m-2 bottom-1'>
                    {productRating}
                    <IoIosStar className='mx-1 text-green-600' />
                    | <span className='ml-1'>{productCustomers}k</span>
                </h1>
            </div>

            {/* brand name */}
            <h1 className='text-sm font-bold pl-2 my-1'>{productBrand}</h1>

            {/* product name */}
            <h2 className='text-sm font-normal pl-2 my-1'>{productName}</h2>

            {/* prices */}
            <h3 className='text-xs font-bold pl-2 pb-3'>
                Rs. {productPrice}
                <span className='mx-1 text-[10px] line-through text-slate-500 font-normal'>Rs. 1990</span>
                <span className='text-[10px] text-yellow-500'>({productDiscount}% OFF)</span>
            </h3>
        </div>
    )
}

export default OneProduct