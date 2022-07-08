import React from "react";
import '../index.css';

const Searchbox = () => {
  return (

    <div>
      <div className="container-fluid search-container bg-light">
        <form className="container d-flex justify-content-center pt-2 pb-2" action="">
          <input type="text" placeholder="What are you looking for.." name="search" id="search-input-bar" className="form-control"></input>
          <button type="submit" id="search-button" className="btn btn-success pe-3 text-center"><img src="./images/search.svg" className="align-middle p-2" />Search</button>
          <button type="reset" id="cancel-button" className="btn btn-danger px-4">Cancel</button>
        </form>
      </div>
    </div>



  );

}
export default Searchbox;