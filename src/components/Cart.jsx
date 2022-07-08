import React, { Component } from 'react';
import '../index.css';
import Searchbox from './Searchbox';
import Footer from './Footer';
import Header from './Header';
import CartCard from './CartCard';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import store from '../redux/store';
import { priceIncreaseAction } from '../redux/actions/totalPriceAction';

const Cart = () => {

    const dispatch = useDispatch
    const items = useSelector((state) => state.cart.cartItems)
    //  var total_price = useSelector((state) => state.cart.total_price)
    console.log("items in cart page", items)

    const login_status = useSelector((state) => state.login.isLoggedIn)
    const orderHandler = () => {

        console.log("your login status", login_status)
        if (login_status === true)
            alert("Your order is placed successfully !!!!")
        if (login_status === false)
            alert("Please do login for placing orders !!!!")

    }

    // total price calculation logic
    var total_price = 0;
    for (let i = 0; i < items.length; i++) {
        total_price = total_price + items[i].count * (items[i].price * (1 - items[i].discount / 100));
    }

    // total items calculation logic
    var total_items = 0;
    for (let i = 0; i < items.length; i++) {
        total_items = total_items + items[i].count;
    }


    return (
        <div>
            <Header />
            <div className='cart-page'>

                <h1> Cart Page </h1>
                <div className='status-container'>
                    <div className='shopping-status'>
                        <div className='bag-status-left ms-4'>
                            <p id='my-bag'>Products: </p>
                            <label id='no-of-items'>{total_items}</label>
                        </div>
                        <div className='total-bag-price'>
                            <label id="bag-price">{total_price}</label>
                            <p className='nett-price'>Total Price: </p>

                        </div>
                    </div>
                </div>

                <div className='main-layout-container mb-5'>
                    <div className='cart-card-container'>

                        {items.map((book) => <CartCard book={book} />)}

                    </div>
                </div>

                <div className='place-order-container'>
                    <div className='place-order-wrapper'>
                        <button className='btn btn-danger ms-4' onClick={orderHandler}>Place Order</button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
};


export default Cart;