import React from 'react'
import image from '../Images/cloud.webp'

export default function Cloud() {
  return (
    <div className='row aboutdiv'>
        <div className='col-md-1'></div>
        <div className='col-md-6 one'>
        <p style={{color:'orange'}}>SDG Solutions Cloud</p>
            <h1 style={{color:'white'}}><b>Unleash The Power Of Cloud With AWS Services</b></h1>
            <br/>
            <p style={{color:'white'}}>Amazon Web Services provides a wide range of cloud services for web development, which can help developers to build and deploy web applications with ease. Some of the AWS cloud services that are commonly used in web development include EC2, S3, CloudFront, RDS, Route53, API Gateway, Lambda Etc.,</p>
            <br/>
            <button style={{padding: '10px 20px', color: 'white',background: 'orange',borderRadius: '7px'}}>Explore</button>
        </div>
        <div className='col-md-5'>
            <img src={image} style={{marginTop: '30px'}}/>
        </div>
    </div>
  )
}
