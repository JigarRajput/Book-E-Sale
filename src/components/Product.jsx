import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Searchbox from './Searchbox';

const Product = () => {

    return(

        <div>

            <Header/>
            <Searchbox/>
            <h1>Product</h1>
<div className='search-n-table-container'>

            <div className='search-n-add-wrapper'>
                <div className='search-n-add-container'>
                    <input type="search" id='search-product'></input>
                     <button id="add-product">Add Product</button>                
                </div>
            </div>

            <table id="product-table">
                <tr>
                    <th>Id</th>
                    <th>Tttuilo</th>
                    <th>Fonte De Dasos</th>
                    <th>Query</th>
                    <th></th>
                </tr>

                <tr>
                    <td>12</td>
                    <td>ISBM FOLLOW UP</td>
                    <td>Data source 1</td>
                    <td>Teste</td>
                    <td>
                        <div className='edit-delete-container'>
                            <a href='#' id="edit-btn">Edit</a>
                            <a href='#' id='delete-btn'>Delete</a>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>13</td>
                    <td>ISBM FOLLOW UP</td>
                    <td>Data source 1</td>
                    <td>Teste</td>
                    <td>
                        <div className='edit-delete-container'>
                            <a href='#' id="edit-btn">Edit</a>
                            <a href='#' id='delete-btn'>Delete</a>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>14</td>
                    <td>ISBM FOLLOW UP</td>
                    <td>Data source 1</td>
                    <td>Teste</td>
                    <td>
                        <div className='edit-delete-container'>
                            <a href='#' id="edit-btn">Edit</a>
                            <a href='#' id='delete-btn'>Delete</a>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>15</td>
                    <td>ISBM FOLLOW UP</td>
                    <td>Data source 1</td>
                    <td>Teste</td>
                    <td>
                        <div className='edit-delete-container'>
                            <a href='#' id="edit-btn">Edit</a>
                            <a href='#' id='delete-btn'>Delete</a>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>16</td>
                    <td>ISBM FOLLOW UP</td>
                    <td>Data source 1</td>
                    <td>Teste</td>
                    <td>
                        <div className='edit-delete-container'>
                            <a href='#' id="edit-btn">Edit</a>
                            <a href='#' id='delete-btn'>Delete</a>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>17</td>
                    <td>ISBM FOLLOW UP</td>
                    <td>Data source 1</td>
                    <td>Teste</td>
                    <td>
                        <div className='edit-delete-container'>
                            <a href='#' id="edit-btn">Edit</a>
                            <a href='#' id='delete-btn'>Delete</a>
                        </div>
                    </td>
                </tr>

                
            </table>

       

</div>   
    <div className='pagination-wrapper'>
        <div class="pagination_section">
         <span>Rows per page: &nbsp; </span>
         <select id='rows-selector'>
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
         </select>   
         <span><span>&nbsp;&nbsp;&nbsp;1-5 &nbsp; </span> of&nbsp; 6 &nbsp;</span>
        <a href="#">  &lt;</a>
        <a href="#">  &gt;</a>
        </div>
    </div>



<Footer />

        </div>


    )

};

export default Product;