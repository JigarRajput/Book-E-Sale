import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../redux/actions/searchAction';
import LinkOrHeader from './LinkOrUser';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    }


    const st = useSelector((state) => state.search.term)

    const user = useSelector((state) => state.login.name)

    return (
        <div className='header-container-main '>
            <div className='header-wrapper-main bg-secondary '>
                <div className='logo-container d-flex align-items-center'>
                    <Link to="/" ><img src="/images/BB.png" alt="Tatvasoft" height={80} className="me-2" style={{ borderRadius: "50%" }} /></Link>
                    <h2 className='text-light'>Book-Baazar</h2>
                </div>

                <input type="text" placeholder="What are you looking for..." id="search-input-bar" name="search" value={search_state} className="form-control border-secondary rounded-pill pr-5  " onChange={handleChange}></input>

                <div className='link-cart-container'>

                    <div className='cart-container '>
                        <Link to="/cart" className='text-decoration-none'><img src='images/cart.svg' /><strong><span className='text-light '>{total_items}</span></strong></Link>
                    </div>

                    <div className='link-container'>
                        <LinkOrHeader user={user} />
                    </div>

                </div>
            </div>
        </div>

    )

};

export default Header;