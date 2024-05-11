import React from 'react'

export default function Hire() {
  return (
    <>
    <div className="row hirerow" style={{background: '#151836',height:'70px'}}>
    <center><h3 style={{color:'white',marginTop:'20px'}}>Hire A Dedicated Developer</h3></center>
    </div>
    <div className='row' style={{background: '#151836',height:'400px'}}>
        <div className='col-md-1'></div>
        <div className='col-md-3' style={{marginLeft:'20px',marginTop:'70px'}}>
            <h4 style={{color:'white'}}>About Company</h4>
            <br/>
            <p style={{textAlign:'justify',color:"white"}}>We provide e-commerce solutions, content management systems, search engine optimization, website hosting, website design, development, and maintenance services. We make sure that our client’s websites are aesthetically pleasing, user-friendly, and search engine optimised by utilizing the most recent technologies and design trends.</p>
        </div>
        <div className='col-md-2' style={{marginLeft:'60px',marginTop:'70px'}}>
            <h4 style={{color:'white'}}>Other Links</h4>
            <br/>
            <p style={{color:"white"}} className='p'><ul style={{listStyle:'none'}}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                </ul></p>
        </div>
        <div className='col-md-2' style={{marginTop:'70px'}}>
            <h4 style={{color:'white'}}>Latest News</h4>
            <br/>
            <h6 style={{color:"white"}}>Hello World!</h6>
            <p style={{color:"grey"}}>
            February 16, 2023<br/>  No Comments
            </p>
            <p style={{color:"orange"}}>Read More</p>
        </div>
        <div className='col-md-2' style={{marginTop:'70px'}}>
            <h4 style={{color:'white'}}>Reach Us Out</h4>
            <br/>
            <p style={{color:"white"}} className='p'><ul style={{listStyle:'none'}}>
                <li>Call Us</li>
                <li>Email Us</li>
                <li>Locate Us</li></ul>
            </p>
        </div>
    </div>
    </>
  )
}
