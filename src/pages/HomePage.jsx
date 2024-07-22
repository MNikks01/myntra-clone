import React from 'react'
import Header from '../components/header/Header'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import FilterOptions from '../components/filterOptions/FilterOptions'
import AllProducts from '../components/allproducts/AllProducts'

function HomePage() {
    return (
        <div className='flex flex-col'>
            {/* header */}
            <Header />

            {/* breadcrumbs */}
            <Breadcrumbs />

            <div className='flex flex-row w-[1350px]  m-auto'>
                {/* filterOptions */}
                <FilterOptions />

                {/* allproducts */}
                <AllProducts />
            </div>
        </div>
    )
}

export default HomePage