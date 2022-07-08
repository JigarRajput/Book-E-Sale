import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Searchbox from './Searchbox';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGIN_SUCCESS } from '../redux/actions/constants';


const initialValues = {
  email: "",
  password: ""
}

// Validation schema Yup

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),

  password: Yup.string()
    .min(4, "Password must be 4 characters at minimum")
    .required("Password is required"),
});


const Login = () => {

  const dispatch = useDispatch()

  const handleLogin = async (event) => {

    // Preventing Browser from reloading
    event.preventDefault()

    const email = event.target.elements.email.value
    const password = event.target.elements.password.value

    const response = await fetch('https://rest-api-tatvasoft.herokuapp.com/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })

    try {

      if (response.status === 200) {
        alert("You  are logged in successfully !!")
        const data = await response.json()
        const login_data = {
          name: data.fName,
          isLoggedIn: true
        }

        dispatch({ type: LOGIN_SUCCESS, data: login_data })
      }


      if (response.status != 200) {
        alert("Please enter correct email password")
        dispatch({ type: LOGIN_SUCCESS, isLoggedIn: false })
      }

    }
    catch (err) {
      console.log(err);
    }
  }




  return (
    <div className='login-page'>
      <Header />
      {/* <Searchbox /> */}
      <div className='login-wrapper'>
        <div class="breadcrumb-wrapper d-flex justify-content-center pt-4">

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active"><Link to="/" className='badge text-light bg-dark text-decoration-none'>Home</Link></li>
              <li class="breadcrumb-item "><Link to="/register" className='badge text-light bg-dark text-decoration-none'>Login</Link></li>
            </ol>
          </nav>

        </div>
        <h1 className='my-5'>Login or Create an Account</h1>

        <div className='container-fluid d-flex justify-content-evenly pb-5'>
          <div className='col-sm-5 '>
            <h4 className='new-customer'>New Customer</h4>
            <hr />

            <p className='text-left-start'>Registration is free and easy</p>
            <ul className='left-list-items'>
              <li>Faster Checkout</li>
              <li>Save multiple shipping addresses</li>
              <li>View and track orders and more</li>

            </ul>

            <Link to="/register"><button className='create-account-button btn btn-danger'>Create an Account</button></Link>

          </div>


          <div className='col-sm-5'>
            <h4 className='new-customer'>Registered Customer</h4>
            <hr />
            <p className='text-left-start'>If you have account with us, please login</p>


            {/* Formik form component */}


            <Formik
              initialValues={initialValues}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                console.log(values);
                alert("Form is validated! Submitting the form...");
              }}
            >

              <Form className='login-info' onSubmit={handleLogin}>
                <label className='email-label-right'>Email Adress *</label>
                <br />
                <Field
                  type="text"
                  className="form-control"
                  id="email-address"
                  name="email"
                />

                <ErrorMessage name="email" component={TextError} />



                <br />
                <label className='password-label-right'>Password *</label>
                <br id='email-password-margin' />
                <Field
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                />
                <ErrorMessage name="password" component={TextError} />



                <button className='login-button btn btn-danger'>Login</button>
              </Form>
            </Formik>
          </div>


        </div>
        <Footer />

      </div>
    </div>



  )
};
export default Login;   