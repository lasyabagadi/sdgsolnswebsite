import React from 'react'
import image1 from '../Images/webd.png'
import image2 from '../Images/image2.png'
import image3 from '../Images/image3.png'
import image4 from '../Images/image4.png'
import image5 from '../Images/image5.png'
import image6 from '../Images/image6.png'

export default function Cards() {
  return (

    <>
    <div className='row five'>
        <div className='col-md-1'></div>
        <div className='col-md-3'>
            <div className="card four1">
                <img src={image1} className="three" />
                <div>
                    <b><h4>Web Development</h4></b><br/>
                    <p style={{textAlign:'justify'}}>Is the process of creating websites and web applications for the internet. At our web development company, we specialize in building custom websites tailored to your unique business needs.</p>
                </div>
            </div>
        </div>
        <div className='col-md-3'>
            <div className="card four2">
                <img src={image2}/>
                <div>
                    <b><h4>Search Engine Optimization</h4></b><br/>
                    <p style={{textAlign:'justify'}}>It is the practice of optimizing a website to improve its ranking in search engine results pages (SERPs). Implementing various techniques and strategies helps to increase organic traffic and visibility for your website.</p>
                </div>
            </div>
        </div>
        <div className='col-md-3'>
            <div className="card four3">
                <img src={image3} className="three1" />
                <div>
                    <b><h4>Cloud Solutions</h4></b><br/>
                    <p style={{textAlign:'justify'}}>You can say goodbye to the hassle of managing your own IT infrastructure, including expensive hardware and software upgrades, maintenance, and repair costs. Instead, you can focus on your core business activities, while we take care of your IT needs.</p>
                </div>
            </div>
        </div>
    </div>
    <div className='row five'>
        <div className='col-md-1'></div>
        <div className='col-md-3'>
            <div className="card four1">
                <img src={image4} className="three2" />
                <div>
                    <b><h4>Data Analysis</h4></b><br/>
                    <p style={{textAlign:'justify'}}>Data analysis is about using data to inform decision-making. By analyzing data, businesses can gain a deeper understanding of their customers, their market, and their own performance, and use this information to make more informed and effective decisions.</p>
                </div>
            </div>
        </div>
        <div className='col-md-3'>
            <div className="card four2">
                <img src={image5} className="three2" />
                <div>
                    <b><h4>E-Commerce Development</h4></b><br/>
                    <p style={{textAlign:'justify'}}>E-commerce has become a critical aspect of any successful business, and developing an effective eCommerce platform requires a comprehensive understanding of the latest technologies and platforms such as Magento, Shopify, WooCommerce, and custom solutions</p>
                </div>
            </div>
        </div>
        <div className='col-md-3'>
            <div className="card four3">
                <img src={image6} className="three2" />
                <div>
                    <b><h4>Digital Marketing</h4></b><br/>
                    <p style={{textAlign:'justify'}}>It is the process of promoting products or services using digital channels such as search engines, social media, email, and websites. In today’s digital age, it has become a critical component of any successful marketing strategy.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
