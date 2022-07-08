import React from 'react';
import Footer from './Footer';
import '../index.css';
import Header from './Header';

const ProductDropDown = () => {

return(

    <div>
            <Header/>
        <div id='search-drop-down-container'>

            <div className="searchbar-container-main">
                <form className="search-bar-form" action="">
                 <div className='search-drop'>   
                 <input type="text" placeholder="What are you looking for.." name="search" id="search-input-bar"></input>
                 <a> <div className='search-result-down'>
                        <div className='container-left'>
                             <p>Title</p>
                             <p>Category</p>
                             <p>Description</p>
                        </div>
                        <div className='container-right'>
                            <p>1000</p>
                            <a>Add to cart</a>
                        </div>
                     </div>
                 </a>
                 </div>
                 <button type="submit" id="search-button"><img src="./images/search.svg"/>Search</button>
                 <button type="reset" id="cancel-button">Cancel</button>
                </form>
            </div>

        </div>
         
    <div className='listing-page'>
            <h1 className='listing-title'>Product Listing</h1>

     <div className='name-drop-down-container'>

        <div className='name-number'> Product name - 14366 items </div>
        <div className='sort-by-drop-down'> 
            <form>
  <label >Sort By:</label>
  <select  id="product-sort">
    <option >a-z</option>
    <option >price</option>
    <option >categories</option>
    <option >trends</option>
  </select>
            </form>
        </div>

     </div>

<div className='cards-container'>


        <div className="card">
            <img src="./images/dummy-image.png" alt="Denim Jeans"/>
            <div className='card-bottom'>
                <h2>Product Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                    <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                <p className='net-price'>800</p>
                <button>Add to Cart</button>
            </div>    
        </div> 

        <div className="card">
            <img src="/images/dummy-image.png" alt="Denim Jeans"/>
            <div className='card-bottom'>
                <h2>Product Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                    <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                <p className='net-price'>800</p>
                <button>Add to Cart</button>
            </div>    
        </div> 


        <div className="card">
            <img src="/images/dummy-image.png" alt="Denim Jeans"/>
            <div className='card-bottom'>
                <h2>Product Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                    <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                <p className='net-price'>800</p>
                <button>Add to Cart</button>
            </div>    
        </div> 


        <div className="card">
            <img src="/images/dummy-image.png" alt="Denim Jeans"/>
            <div className='card-bottom'>
                <h2>Product Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                    <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                <p className='net-price'>800</p>
                <button>Add to Cart</button>
            </div>    
        </div> 

        <div className="card">
            <img src="/images/dummy-image.png" alt="Denim Jeans"/>
            <div className='card-bottom'>
                <h2>Product Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                    <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                <p className='net-price'>800</p>
                <button>Add to Cart</button>
            </div>    
        </div> 


        <div className="card">
            <img src="/images/dummy-image.png" alt="Denim Jeans"/>
            <div className='card-bottom'>
                <h2>Product Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                    <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                <p className='net-price'>800</p>
                <button>Add to Cart</button>
            </div>    
        </div> 


        <div className="card">
            <img src="/images/dummy-image.png" alt="Denim Jeans"/>
            <div className='card-bottom'>
                <h2>Product Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                    <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                <p className='net-price'>800</p>
                <button>Add to Cart</button>
            </div>    
        </div> 


        <div className="card">
            <img src="/images/dummy-image.png" alt="Denim Jeans"/>
            <div className='card-bottom'>
                <h2>Product Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                    <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                <p className='net-price'>800</p>
                <button>Add to Cart</button>
            </div>    
        </div> 


        <div className="card">
            <img src="/images/dummy-image.png" alt="Denim Jeans"/>
            <div className='card-bottom'>
                <h2>Product Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                    <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                <p className='net-price'>800</p>
                <button>Add to Cart</button>
            </div>    
        </div> 


        <div className="card">
            <img src="/images/dummy-image.png" alt="Denim Jeans"/>
            <div className='card-bottom'>
                <h2>Product Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maiores distinctio tempora ut amet, natus ullam enim susci</p>
                    <div className='price-container'><p>MRP <del>1000</del> <p className='discount'>20.00% OFF</p></p></div>
                <p className='net-price'>800</p>
                <button>Add to Cart</button>
            </div>    
        </div> 


</div>
            <Footer/>
        
    </div>
        
    </div>

)


};

export default ProductDropDown;
