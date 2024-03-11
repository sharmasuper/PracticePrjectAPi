import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../APIcommon/Navbar';
function NextPage() {
     const {Product} = useParams()
        const Selector = useSelector((state)=>state.Fetch.NextStore)
        const {author,urlToImage, title} = Selector[0]
  return (
    <>
   
    <div className='container-fluid'>
  
      
       <img src={urlToImage} alt={title} width="500px" height="300px"/>
       <h4>{author}</h4>
       <h6>{title}</h6>
    </div>
    </>
  );
}

export default NextPage;
