import store from '../redux/store';
import { addToCartAction } from '../redux/actions/addCartActions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART } from '../redux/actions/constants';
import { priceIncreaseAction } from '../redux/actions/totalPriceAction';

export default function ProductCard({ books }) {
    console.warn("action props", books)
    const dispatch = useDispatch()

    const addToCartHandler = (book) => {
        dispatch(addToCartAction(book))
        dispatch(priceIncreaseAction(Math.round(book.price - book.price * (book.discount / 100))))
    }

    const sorted_books = useSelector((state) => state.sort.sorted_books)
    if (sorted_books.length != 0)
        books = sorted_books

    const search_term = useSelector((state) => state.search.term)
    const foundBook = books.filter((book) => book.title.toUpperCase().includes(search_term.toUpperCase()));

    if (search_term != "")
        books = foundBook

    if (search_term === "")
        books = books;

    return (
        <div className='p-c-container'>

            {books.map((book) => (
                <div className="card rounded-4 shadow-lg bg-light">
                    <img src={book.image} className='rounded-top ' alt="Denim Jeans" />

                    <div className='card-body'>
                        <h4 className='card-title text-dark'><strong>{book.title}</strong></h4>
                        <p className='card-text text-dark'>{book.description}</p>
                        <div className='price-container text-dark'><p>MRP <del>{book.price}</del> <p className='discount'>{book.discount} % OFF</p></p></div>
                        <p className='net-price text-dark'><strong>Net price: &nbsp; {Math.round(book.price - book.price * book.discount / 100)}</strong></p>
                        <button className="btn btn-danger btn-lg rounded-3 mb-0" onClick={() => { addToCartHandler(book); console.log("updated state", store.getState()) }} >Add to Cart</button>
                    </div>
                </div>
            ))


            }

        </div>
    )
}
