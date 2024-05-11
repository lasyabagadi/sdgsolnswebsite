import React from 'react';
import webdev from '../Images/webdev.png';

export default function Webdev() {
  return (
    <>
    <div className='row'>
        <div className='col-md-6'>
            <br/><br/><br/>
            <b>
            <h1 >Web Development</h1>
            <br/>
            <p>Is the process of creating websites and web applications for the internet. At SDG Solutions company,
          we specialise in building custom websites tailored to your unique business needs.</p>
          </b>
        </div>
        <div className='col-md-6'>
            <center>
        <img src={webdev} className='imagdiv'/> 
        </center>
        </div>
    </div>
    </>
  )
}
