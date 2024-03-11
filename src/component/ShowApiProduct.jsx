import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchNewsAPi } from '../APIcommon/ThunkAdd';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage
  } from 'mdb-react-ui-kit'
import { AddToCard, RemoveSelect, SelectNews } from '../Store/StoreSlice';
import Navbar from '../APIcommon/Navbar';
import { Link, NavLink } from 'react-router-dom';

function ShowApiProduct() {
    
  const Selector = useSelector((state)=>state.Fetch)
  console.log(Selector)
  const {status,totalResults,articles} = Selector.Movies


  const dispatch = useDispatch()
  const News = "general"
  useEffect(()=>{
   dispatch(FetchNewsAPi(News))
   dispatch(RemoveSelect())
  },[status])

  

  return (
    <>
    <Navbar/>
  
    <div className='container-fluid'>
    
        <div className='row'>
        { status&&articles.map((List,index)=>{
            const {author,source,urlToImage,title} = List
        const {id,name} = source
         return    <div className='col-4 mt-2' key={index}>
         <MDBCard>
        <MDBCardImage src= {urlToImage?urlToImage:'https://mdbootstrap.com/img/new/standard/nature/182.webp'} alt='...' position='top' />
        <MDBCardBody>
            <h5>{author}</h5>
            <h6>title - {title}</h6>
            <h6>News type -{name}</h6>
            <h4>Index - {index}</h4>
        <MDBCardText>
           Some quick example text to build on the card title and make up the bulk of the card's content.
         </MDBCardText>
      </MDBCardBody>
      <NavLink style={{color:"white"}} to='/AddTocard'>
      <button className="btn btn-primary m-2" onClick={()=>dispatch(AddToCard(List))}> AddToCard</button></NavLink>
       <button className='btn btn-primary m-2' onClick={()=>dispatch( SelectNews(List))}>
        <NavLink style={{color:"white"}} to ={`/AddProduct/${title}`}>choose News</NavLink>
        </button> 
    </MDBCard>
    </div>
    })}
    </div>
    </div>
    </>
  );
}

export default ShowApiProduct;
