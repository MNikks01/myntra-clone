import React from 'react'
import { CiSearch } from "react-icons/ci";

function FilterOptions() {

    const allFilters = [
        {
            filterBy: 'BRAND',
            search: true,
            color: false,
            inputType: 'checkbox',
            filters: [
                { filterName: 'HIGHLANDER', filteredProducts: 12345 },
                { filterName: 'Snitch', filteredProducts: 5235 },
                { filterName: 'Roadster', filteredProducts: 213 },
                { filterName: 'Parx', filteredProducts: 7890 },
                { filterName: 'Indian Terrain', filteredProducts: 24537 },
                { filterName: 'M & H', filteredProducts: 10000 },
                { filterName: 'ShowOff', filteredProducts: 100 },
                { filterName: 'Luis Phillipe', filteredProducts: 1 },
            ],
            more: '139+'
        },
        {
            filterBy: 'PRICES',
            search: false,
            color: false,
            inputType: 'checkbox',
            filters: [
                { filterName: 'Rs. 249 to 1000', filteredProducts: 12345 },
                { filterName: 'Rs. 1000 to 2000', filteredProducts: 5235 },
                { filterName: 'Rs. 2000 to 3000', filteredProducts: 213 },
                { filterName: 'Rs. 3000 to 4000', filteredProducts: 213 },
                { filterName: 'Rs. 4000 to 5000', filteredProducts: 213 },
            ]
        },
        {
            filterBy: 'COLOR',
            search: true,
            inputType: 'checkbox',
            color: true,
            filters: [
                { filterName: 'green', filteredProducts: 12345 },
                { filterName: 'red', filteredProducts: 5235 },
                { filterName: 'purple', filteredProducts: 213 },
                { filterName: 'blue', filteredProducts: 213 },
                { filterName: 'black', filteredProducts: 213 },
                { filterName: 'white', filteredProducts: 213 },
                { filterName: 'yellow', filteredProducts: 213 },
                { filterName: 'orange', filteredProducts: 213 },
            ],
            more: '30+'
        },
        {
            filterBy: 'Discount Range',
            search: false,
            color: false,
            inputType: 'radio',
            filters: [
                { filterName: '10% Above', filteredProducts: 12345 },
                { filterName: '20% Above', filteredProducts: 12345 },
                { filterName: '30% Above', filteredProducts: 12345 },
                { filterName: '40% Above', filteredProducts: 12345 },
                { filterName: '50% Above', filteredProducts: 12345 },
                { filterName: '60% Above', filteredProducts: 12345 },
                { filterName: '70% Above', filteredProducts: 12345 },
            ]
        },

    ]

    return (
        <div className='w-[255px] border-r-1 border-t-1 border-slate-900 rounded-sm '>
            {
                allFilters.map((oneFilter, i) => (
                    <div key={i} className='border-b-2 border-slate-200 pb-5 p-4'>
                        <div className='flex flex-row items-center justify-between mb-2'>
                            <p className='text-xs font-bold'>{oneFilter.filterBy}</p>
                            {
                                oneFilter.search &&
                                <CiSearch className='text-md bg-slate-200 p-1.5 rounded-full box-content' />
                            }
                        </div>
                        <div className='flex flex-col'>
                            {
                                oneFilter.filters.map((oneBrand, i) => (
                                    <div key={i} className='flex flex-row items-center mb-2'>
                                        <input
                                            name={oneFilter.filterBy}
                                            type={oneFilter.inputType}
                                            className='mr-3'
                                        />
                                        {
                                            oneFilter.color &&
                                            <div
                                                style={{
                                                    backgroundColor: oneBrand.filterName,
                                                    border: oneBrand.filterName === 'white' ? '1px solid lightgray' : 'none'
                                                }}
                                                className='w-4 h-4 rounded-full mr-2 border border-slate-400'
                                            >
                                            </div>
                                        }
                                        <p className='text-xs font-normal mr-1'>{oneBrand.filterName}</p>
                                        <p className='text-[10px] text-slate-500'>({oneBrand.filteredProducts})</p>
                                    </div>
                                ))
                            }
                            {
                                oneFilter.more &&
                                <h1 className='text-xs font-semibold text-pink-400 ml-7 mt-2'>{oneFilter.more} more</h1>
                            }
                        </div>
                    </div>
                ))
            }

            {/* brand */}


            {/* <div className='border-b-2 border-slate-200 pb-5 p-4'>
                <div className='flex flex-row items-center justify-between mb-2'>
                    <p className='text-xs font-bold'>Price</p>

                </div>
                <div className='flex flex-col'>
                    {
                        prices.map((onePrice, i) => (
                            <div key={i} className='flex flex-row items-center mb-2'>
                                <input
                                    type="checkbox"
                                    className='mr-3'
                                />
                                <p className='text-xs font-normal mr-1'>{onePrice.priceRange}</p>
                                <p className='text-[10px] text-slate-500'>({onePrice.totalProducts})</p>
                            </div>
                        ))
                    }

                </div>
            </div>

            
            <div></div>

            
            <div></div> */}
        </div>
    )
}

export default FilterOptions
