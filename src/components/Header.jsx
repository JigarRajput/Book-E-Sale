import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import Cart from "./Cart";
import store from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../redux/actions/searchAction';
import LinkOrHeader from './LinkOrUser';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { store } from "../index"

const Header = (props) => {

    const items = useSelector((state) => state.cart.cartItems)

    // total cart items logic
    var total_items = 0;
    for (let i = 0; i < items.length; i++) {
        total_items = total_items + items[i].count;
    }

    const [search_state, setSearch] = useState("")

    const dispatch = useDispatch()

    const handleChange = (event) => {

        //prevent browser reloding
        event.preventDefault();

        const search_term = event.target.value;
        setSearch(search_term)
        dispatch(searchAction(search_term))
        setSearch(search_term)
        // console.log("you searched for", search_term)
        // console.log("state after search", store.getState())
    }

    const handleSubmit = (event) => {

        //prevent browser reloding
        event.preventDefault();

        const search_term = event.target.search.value;
        dispatch(searchAction(search_term))
        console.log("you searched for", search_term)
        console.log("state after search", store.getState())
    }

    const st = useSelector((state) => state.search.term)
    console.log("your search term in state", st)

    const user = useSelector((state) => state.login.name)
    console.log("username from header", user)

    return (
        <div className='header-container-main '>
            <div className='header-wrapper-main bg-secondary '>
                <div className='logo-container'>
                    <Link to="/" ><img src="https://www.tatvasoft.com/blog/wp-content/uploads/2015/12/logo.png" alt="Tatvasoft" /></Link>
                </div>

                <input type="text" placeholder="What are you looking for.." id="search-input-bar" name="search" value={search_state} className="form-control border-secondary rounded-pill pr-5  " onChange={handleChange}></input>


                <div className='link-cart-container'>

                    <div className='cart-container '>
                        <Link to="/cart" className='text-decoration-none'><img src='images/cart.svg' /><strong><span className='text-light '>{total_items}</span></strong></Link>
                    </div>

                    <div className='link-container'>
                        {/* <Link to="/login" className='text-decoration-none text-light '>Login</Link>
                        <Link to="/Register" className='text-decoration-none text-light '>Register</Link> */}
                        <LinkOrHeader user={user} />

                    </div>



                </div>

            </div>
        </div>

    )


};



export default Header;