import React from 'react'
import image from '../Images/about.png'

export default function About() {
  return (
    <>
    <div className='row aboutdiv'>
        <div className='col-md-1'></div>
        <div className='col-md-5'>
            <center>
            <img src={image} className='two'/>
            </center>
        </div>
        <div className='col-md-6 one'>
            <p style={{color:'orange'}}>About SDG Solutions</p>
            <h1 style={{color:'white'}}><b>Professional IT Experts For Tech Solutions</b></h1>
            <br/>
            <p style={{color:'white'}}>At SDG Solutions, We specialize in providing top-quality software solutions for businesses and individuals alike. Our team of expert developers and designers are committed to delivering cutting-edge software that is both intuitive and functional. At our company, we understand the importance of staying ahead of the curve when it comes to software development.</p>
            <br/>
            <button style={{padding: '10px 20px', color: 'white',background: 'orange',borderRadius: '7px'}}>About Us</button>
        </div>
    </div>
        
    </>
  )
}
