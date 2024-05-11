import React from 'react';
import webdev from '../Images/webdev.png';

export default function Webdev() {
  return (
    <>
    <div className='row webdiv'>
      <div className='col-md-2'></div>
    <div className='col-md-4 d-flex justify-content-center'>
        <div className='mt-4 p-5'>
          <h1>Web Development</h1>
          <p>Is the process of creating websites and web applications for the internet. At SDG Solutions company,
          we specialise in building custom websites tailored to your unique business needs.</p>
        </div>
    </div>
    <div className='col-md-6 imgdiv'>
      <img src={webdev} className='imagdiv'/> 
    </div>
    </div>
    </>
  )
}
