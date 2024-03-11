
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux';
import { FetchNewsAPi } from './ThunkAdd';

function Navbar() {
  const {
    register, handleSubmit, } = useForm()

    const dispatch = useDispatch()
    const onSubmit = (data) =>{
       console.log(data.Search)
       const check = data.Search
       dispatch(FetchNewsAPi(check))
    }
  
  
    
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light position-fixed w-100" style={{background:"gray",zIndex:"1"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span  style={{color:"black"}} className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/AddTocard'>Add To card</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
              <input className="form-control me-2" type="search"  placeholder="Search" aria-label="Search" {...register("Search")} />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div> 
      </nav>
    </div>
  );
}

export default Navbar;
