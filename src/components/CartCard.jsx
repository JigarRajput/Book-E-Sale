import React from 'react';
import '../index.css';
import { useDispatch } from 'react-redux/es/exports';
import store from '../redux/store';
import { removeFromCartAction } from '../redux/actions/removeCartAction';
import { REMOVE_FROM_CART } from '../redux/actions/constants';
import { useSelector } from 'react-redux/es/exports';
import { useState } from 'react';
import { priceDecreaseAction } from '../redux/actions/totalPriceAction';
import { priceIncreaseAction } from '../redux/actions/totalPriceAction';
import { addToCartAction } from '../redux/actions/addCartActions';
import { reduceItemCount } from '../redux/actions/reduceItemAction';

const CartCard = ({ book }) => {

    const [multiplier, setMultiplier] = useState(1);

    const dispatch = useDispatch()
    ///const items = useSelector((state) => state.cart.cartItems)
    //var total_price = useSelector((state) => state.total_price)

    console.log("store from cart card", store.getState())

    const subtractHandler = (book) => {
        //setMultiplier(multiplier - 1)
        dispatch(reduceItemCount(book))
    }

    const addHandler = (book) => {
        // setMultiplier(multiplier + 1)
        // dispatch(priceIncreaseAction(price))
        dispatch(addToCartAction(book))
    }

    const removeCartHandler = (book) => {
        dispatch(removeFromCartAction(book))
        dispatch(priceDecreaseAction(multiplier * Math.round((book.price - book.price * (book.discount / 100)))))
        // setMultiplier(1)
    }


    return (

        <div className=''>
            {/* {items.map((book) => ( */}
            <div className='cart-card rounded mb-5 col-sm-4'>

                <div className='cart-left'>
                    <img src={book.image} className='cart-image' alt="Denim Jeans" />
                </div>

                <div className='cart-right'>
                    <div className='cart-right_left d-flex flex-column'>
                        <label>{book.title}</label><br />

                        <div className='mt-4'>

                            <strong>Qty: &nbsp;</strong>
                            <button className='btn btn-dark btn-sm ' type='button' onClick={() => addHandler(book)}> + </button>
                            <label>&nbsp;{book.count}&nbsp;</label>
                            <button className='btn btn-dark btn-sm ' type='button' onClick={() => subtractHandler(book)}>-</button>

                        </div>
                    </div>
                    <div className='cart-right_right d-flex flex-column justify-content-between'>
                        <div className='d-flex'>
                            <label>Net Price:&nbsp;</label>
                            <label><strong>{Math.round(book.price - book.price * (book.discount / 100))}</strong></label>
                        </div>
                        <div className='price-discount mt-1'> <label className='mb-1'><del>{book.price}</del><p className='mx-3'>{book.discount}% off</p></label></div>
                        <button className='btn btn-dark btn-sm' onClick={() => removeCartHandler(book)}>Remove</button>
                    </div>
                </div>
            </div>



        </div>


    )
    { console.log(store.getState()) }
}

export default CartCard;