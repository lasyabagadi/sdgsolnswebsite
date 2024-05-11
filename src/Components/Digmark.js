import React from 'react'
import image from '../Images/gm.jpeg'

export default function Digmark() {
  return (
    <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-4'>
            <img src={image} style={{height: '500px',width:'500px',}}/>
        </div>
        <div className='col-md-6 one'>
            <p style={{color:'orange'}}>Digital Marketing</p>
                <h3><b>Marketing & Sale Solutions To Grow Your Business</b></h3>
                <br/>
                <p>Creative marketing services can help grow your business in the local market by generating more awareness and interest in your products or services. <br/>Some effective strategies include :</p>
            <ul>
                <li>Branding</li>
                <li>Content Marketing</li>
                <li>Search Engine Optimization</li>
                <li>Social Media Marketing</li>
                <li>Email Marketing</li>
            </ul>
        </div>
        <div className='col-md-2'></div>
    </div>
  )
}
