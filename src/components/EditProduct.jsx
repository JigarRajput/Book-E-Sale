import React from 'react';
import Searchbox from './Searchbox';
import Footer from './Footer';
import '../index.css';
import Header from './Header';

const EditProduct = () =>{

return(
    <div>
        <Header/>
        <Searchbox/>

        <div className='edit-product-page'>
            <h1 id="editproduct">Edit Product</h1>
            <form id='edit-product-form'>
                <div className='edit-left-container'>
                    <label className='edit-fname left-side-element'>First Name*</label>
                    <br/>
                    <input id='edit-fname-input' className='left-side-element' type="text"></input>
                    <br/>
                    <label className='categories-label left-side-element'>Shop By Categories</label>
                    <br/>
                    <select id='categories-dropdown' className="left-side-element">
                        <option>Car Magazines</option>
                        <option>Horror</option>
                        <option>Princess and fairy tales</option>
                        <option>Magazines</option>
                    </select>
                    <br/>
                    <div className='upload-container left-side-element'>
                        <input id='upload-file'type="file" name='Upload'></input>
                    </div>
                    <div className='save-cancel-container'>
                        <button id='save-btn'>Save</button>
                        <button id='cancel-btn'>Cancel</button>
                    </div>
                </div>
                <div className='edit-right-container'>
                    <label id='lname' className='right-side-element'>Last Name *</label>
                    <br/>
                    <input type="text" id="lname-input" className='right-side-element'></input>
                    <br/>
                    <label id='description' className='right-side-element'>Description</label>
                    <br/>
                    <input id='description-box' className='right-side-element' type="text"></input>
                </div>
            </form>
        </div>

        
        <Footer/> 
    </div>
)

};

export default EditProduct;