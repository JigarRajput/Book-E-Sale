import React from 'react';
import Searchbox from './Searchbox';
import Footer from './Footer';
import Header from './Header';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

// initial value
const initialValues = {
  email: "",
  password: "",
  fname: "",
  lname: "",
  confirmPassword: ""
}

// Validation schema Yup

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),

  fname: Yup.string().required("First name is required"),

  password: Yup.string()
    .min(4, "Password must be 4 characters at minimum")
    .required("Password is required"),

  //confirmPassword: Yup.string().min(4, "Password must be 4 characters at minimum") //.oneOf([Yup.ref('password'), null], "Password must match") // 

  confirmPassword: Yup.string().test(
    "passwords-match",
    "Passwords must match",
    function (value) {
      return this.parent.password === value;
    }
  )

});


const Register = () => {

  const handleRegister = async (event) => {

    // Preventing Browser from reloading
    event.preventDefault()

    const email = event.target.elements.email.value
    const password = event.target.elements.password.value
    const fname = event.target.elements.fname.value
    const lname = event.target.elements.lname.value

    const response = await fetch('https://rest-api-tatvasoft.herokuapp.com/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fName: fname,
        lName: lname,
        email: email,
        password: password
      })
    })

    console.log("registration details", JSON.stringify({
      fname: fname,
      lname: lname,
      email: email,
      password: password
    }))

    try {
      const data = response.status
      console.log(data)
      if (data === 200)
        alert("You  are Registered in successfully !!")

      else
        alert("User with this email and password already exists !!")

      // if (data.success) {
      //   // Dispatching login action to the store
      //   dispatch(login({ loggedIn: true, userName: data.userName }))
      // }
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header />
      {/* <Searchbox/> */}
      <section className="create-account-page-wrapper">
        <div className="container">
          <div className="breadcrumb-wrapper d-flex justify-content-center pt-4">

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item active "><Link to="/" className='badge text-light bg-dark text-decoration-none'>Home</Link></li>
                <li class="breadcrumb-item "><Link to="/register" className='badge text-light bg-dark text-decoration-none'>Register</Link></li>
              </ol>
            </nav>

          </div>
          <h1 className='my-5'>Login or Create an Account</h1>
          <div className="container-fluid ">


            <div className="personal-information">
              <div className="personal-information-header">
                <h3>Personal Information</h3>
                <hr />
                <p>
                  Please enter the following information to create your
                  account.
                </p>
              </div>


              <Formik
                initialValues={initialValues}
                validationSchema={RegisterSchema}
              >
                <Form onSubmit={handleRegister}>
                  <div className="mt-4 row ">
                    <div className="col-6 ">
                      <div className="">

                        <label for="first-name" id="first-name-label">First Name *</label>
                        <Field
                          type="text"
                          className="form-control col-6"
                          id="first-name"
                          name="fname"
                        />

                        <ErrorMessage name="fname" component={TextError} />

                      </div>
                    </div>
                    <div className="col-6 ">
                      <div className="">

                        <label for="last-name"
                          id="last-name-label">
                          Last Name *
                        </label>

                        <Field
                          type="text"
                          className="form-control"
                          id="last-name"
                          name="lname"
                        />

                        <ErrorMessage name="lname" component={TextError} />


                      </div>
                    </div>
                    <div className="full-width mt-3">
                      <div className="form-group">
                        <label for="email-address" id="email-address-label"
                        >Email Adress *</label
                        >
                        <Field
                          type="text"
                          className="form-control"
                          id="email-address"
                          name="email"
                        />

                        <ErrorMessage name="email" component={TextError} />

                      </div>
                    </div>
                  </div>
                  {/* </Form>
              </Formik> */}
                  {/* </div> */}

                  {/* <Formik>
              <Form> */}
                  <div className="login-information mt-5">

                    <h2>Login Information</h2>
                    <hr />

                    <div className="row">
                      <div className="col">



                        <label for="password" id="password-label"
                        >Password *</label
                        >
                        <Field
                          type="password"
                          className="form-control"
                          id="password"
                          name='password'
                        />

                        <ErrorMessage name="password" component={TextError} />

                      </div>

                      <div className="col">

                        <label
                          for="confirm-password"
                          id="confirm-password-label">Confirm Password *</label>
                        <Field
                          type="password"
                          className="form-control"
                          id="confirm-password"
                          name="confirmPassword"
                        />

                        <ErrorMessage name="confirmPassword" component={TextError} />

                      </div>

                    </div>
                    <div className="btn-wrapper mt-4 pb-5">
                      <button className="btn btn-danger px-4 py-2" type="submit">
                        Register
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>

  )

};

export default Register;