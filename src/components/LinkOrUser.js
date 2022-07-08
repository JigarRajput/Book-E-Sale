import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import Cart from "./Cart";
import store from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { NO_LOGIN } from '../redux/actions/constants';


const LinkOrHeader = ({ users }) => {


    const dispatch = useDispatch()

    const handleChange = (event) => {

        if (event.target.value === "Logout") {

            const login_status = {
                isLoggedIn: false,
                name: ""
            }
            dispatch({ type: NO_LOGIN, data: login_status })
        }



    }

    const user = useSelector((state) => state.login.name)

    if (user === "") {
        return (
            <div >

                <Link to="/login" className='text-decoration-none text-light '>Login</Link>
                <Link to="/Register" className='text-decoration-none text-light '>Register</Link>

            </div>
        )
    }


    else {

        return (
            <div className='dropdown'>

                <select name='select' onChange={handleChange}>
                    <option >Hi {user}</option>
                    <option >Logout</option>
                </select>

            </div >
        )

    }

}

export default LinkOrHeader;