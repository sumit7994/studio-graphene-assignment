import React, { useEffect, useRef, useState } from 'react'
import './Products.css'

import Underline from '../../assets/underline.png'
import LinkArrow from '../../assets/link-arrow.png'

import { fetchCategories, fetchProducts } from '../../utils/APIs'
import { LeftArrowIcon, RightArrowIcon } from '../../utils/SVGs'

export default function Products() {

    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const scrollRef = useRef();

    useEffect(() => {
        // Fetching the categories
        fetchCategories().then((res) => {
            setActiveCategory(res[0])
            setCategories(res)
        }).catch((error) => {
            console.log(error);
        })

        // Fetching the products List
        fetchProducts().then((res) => {
            setProducts(res)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    useEffect(() => {
        // Filter the products according to the selected category.
        let filteredProductsList = products.filter((product) => {
            return product?.category === activeCategory
        })

        setFilteredProducts(filteredProductsList)
    }, [activeCategory, products])

    const scroll = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset;
    };

    return (
        <div className='p-4'>

            <div className='d-flex justify-content-between align-items-center flex-wrap'>
                <div >
                    <h1 className='products-heading'>New Products</h1>
                    <img src={Underline} alt="underline" className='underline' />
                </div>

                <div className='d-flex gap-5 d-none d-md-flex'>
                    {/* Left Arrow */}
                    <span onClick={() => scroll(-300)}>
                        <LeftArrowIcon />
                    </span>

                    {/* Right Arrow */}
                    <span onClick={() => scroll(300)}>
                        <RightArrowIcon />
                    </span>
                </div>
            </div>

            <div className='d-flex flex-column flex-md-row p-3'>

                <div className='d-flex flex-md-column category-container'>
                    {
                        categories.map((category, index) => {
                            return <p onClick={() => setActiveCategory(category)} key={index} className={`category ${category === activeCategory && "active"}`}>{category}</p>
                        })
                    }
                </div>

                <div ref={scrollRef} className='flex-grow-1 product-container'>
                    <div className='d-flex gap-5 w-100 overflow'>
                        {
                            filteredProducts.map((product) => {
                                return (
                                    <div key={product?.id} className='card-container d-flex flex-column gap-3'>
                                        <div className='position-relative card-image-container d-flex align-items-center'>
                                            <div className='card-image d-flex align-items-center'>
                                                <img className='w-75' src={product?.image} alt={product?.title} />
                                            </div>
                                            <img role='button' height={'45px'} width={'45px'} className='position-absolute link' src={LinkArrow} alt="Link To" />
                                        </div>

                                        <div className='d-flex flex-column gap-2 justify-content-between h-100'>
                                            <div>
                                                <p className='card-heading'>{product?.title}</p>
                                                <p className='card-content'>{product?.description}</p>
                                            </div>
                                            <p className='card-price'>${product?.price}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='d-flex gap-5 d-flex d-md-none mt-4 justify-content-center'>
                    {/* Left Arrow */}
                    <span onClick={() => scroll(-300)}>
                        <LeftArrowIcon />
                    </span>
                    {/* Right Arrow */}
                    <span onClick={() => scroll(300)}>
                        <RightArrowIcon />
                    </span>
                </div>

            </div>
        </div>
    )
}
