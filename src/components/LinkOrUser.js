import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
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
            <div className='m-1 lANDr'>
                <Link to="/login" className='text-decoration-none text-light p-1 me-1 pe-3' style={{ borderRight: "2px solid white" }}>Login</Link>
                <Link to="/Register" className='text-decoration-none text-light p-1 ms-1'>Register</Link>
            </div>
        )
    }

    else {
        return (
            <div class="d-flex flex-row">
                <Link to="/sell" className="btn btn-dark btn-rounded p-2 text-light">Add Book</Link>
                <div className='dropdown'>
                    <select name='select' onChange={handleChange}>
                        <option >Hi {user}</option>
                        <option >Logout</option>
                    </select>
                </div >
            </div>
        )
    }
}

export default LinkOrHeader;