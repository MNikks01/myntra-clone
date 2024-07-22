import React, { useEffect, useState } from 'react'
import OneProduct from './OneProduct'

function AllProducts() {

    const [allProducts, setallProducts] = useState(null)
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setallProducts(data)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => {
                setallProducts(data.products)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    console.log(allProducts);

    return (
        <div className='grid grid-cols-5 border-t-2 border-slate-300'>
            {
                allProducts?.map((onePro, i) => (
                    // <OneProduct
                    //     key={i}
                    //     productImage={onePro.image}
                    //     productRating={onePro.rating.rate}
                    //     productBrand={onePro.category}
                    //     productPrice={onePro.price}
                    //     productName={onePro.title}
                    // // productDiscount={onePro.discountPercentage}
                    // />
                    <OneProduct
                        key={i}
                        productImage={onePro.images[0]}
                        productRating={onePro.rating}
                        productBrand={onePro.brand}
                        productPrice={onePro.price}
                        productName={onePro.title}
                        productDiscount={onePro.discountPercentage}
                    />
                ))
            }
        </div>
    )
}

export default AllProducts