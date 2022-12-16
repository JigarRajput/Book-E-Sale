import React, { Component } from 'react'
import ProductCard from './ProductCard';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useState, useEffect } from 'react';
import { setProductsAction } from '../redux/actions/setProductsAction';
import { SET_PRODUCTS, SORT_BY_ALPHA, SORT_BY_PRICE } from '../redux/actions/constants';
import { sortActionA, sortActionAlphabets, sortActionP } from '../redux/actions/sortActionAlphabets';
import { sortActionPrice } from '../redux/actions/sortActionPrice';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';


const Listing = () => {

    const [books, setBooks] = useState([]);
    const dispatch = useDispatch()
    const search_term = useSelector((state) => state.search.term)

    useEffect(() => {
        fetch('https://spring-boot-postgres-restapi-production.up.railway.app/api/getbooks')
            .then(res => res.json())
            .then((data) => {
                localStorage.setItem('books_', data)
                setBooks(data)
            })
            .catch(console.log)
    }, [])


    const foundBook = books.filter((book) => book.title.toUpperCase().includes(search_term.toUpperCase()));

    if (search_term === "") {
        var books_to_render = books;
    }
    else {
        var books_to_render = foundBook;
    }

    let sorted_books = books_to_render;

    const handleChange = (event) => {

        const sort_order = event.target.value
        // console.log("sort order", sort_order)

        if (sort_order === "a-z") {
            console.log("sort order", sort_order)
            dispatch(sortActionAlphabets(books_to_render))
            console.log(sorted_books)
        }

        if (sort_order === "price") {
            console.log("sort order", sort_order)
            dispatch(sortActionPrice(books_to_render))
            console.log(sorted_books)
        }
    }


    return (
        <div className='bg-light'>
            <Header />

            <div className='listing-page bg-light' >

                {/* <h1 className='listing-title text-dark'>Product Listing</h1> */}

                <div className='splide-container'>
                    <Splide aria-label="My Favorite Images" hasTrack={false} id="splide" options={{
                    }}>
                        <SplideTrack>
                            <SplideSlide className='slide'>
                                <img src="/images/discount.jpg" className='slide-img' alt="/images/discount.jpg" />
                            </SplideSlide>
                            <SplideSlide className='slide'>
                                <img src="https://thumbs.dreamstime.com/z/christmas-sale-message-gift-box-tree-toy-160508876.jpg" alt="Image 2" className='slide-img' />
                            </SplideSlide>
                            <SplideSlide className='slide'>
                                <img src='https://thumbs.dreamstime.com/z/sale-get-up-to-percent-discount-seashore-palm-surfboard-yellow-sand-sea-surf-banner-actions-summer-vector-template-152599995.jpg' className='slide-img' />
                            </SplideSlide>
                        </SplideTrack>

                        <div className="splide__arrows">
                            <button className="splide__arrow splide__arrow--prev"><img src='/images/right-arrow.png' width="20px" className='left-arrow' /></button>
                            <button className="splide__arrow splide__arrow--next"><img src='/images/right-arrow.png' width="20px" /></button>
                        </div>

                    </Splide>
                </div>

                <div className='name-drop-down-container d-flex align-items-center justify-content-between container'>
                    <div className='name-number ms-2 text-dark '><strong> {books_to_render.length} <i>books found</i></strong></div>
                    <div className='sort-by-drop-down me-4'>
                        <form>
                            <label><strong>Sort By:</strong></label>
                            <select id="product-sort" name='select' onChange={handleChange}>
                                <option >categories</option>
                                <option >a-z</option>
                                <option >price</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className='cards-container container mt-4 rounded-4'>
                    <ProductCard books={sorted_books} />
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Listing;





