import React,{useEffect} from 'react';
import FirstImage from "../../Assets/Image1.jpg";
import SecondImage from "../../Assets/Image2.jpg";
import ThirdImage from "../../Assets/Image3.jpg";
import FourthImage from "../../Assets/Image4.jpg";
import "./glimpses.css";
import Aos from "aos";
const Glimpses = () => {
    useEffect(()=>{
        Aos.init({
            offset:200,
            duration:2000
        })
    },[])
                              
  return (
    <div className='container'>
        <div className='row'>
            <h2 className='text text-center text-muted  my-5 py-5' data-aos="zoom-out">Few Glimpses In Our College</h2>
            <div className='col-lg-4 col-6 col-sm-6 col-md-6 mt-1'>
            <div className='card' data-aos="zoom-out">
                <img src={FirstImage} className="img img-fluid glimp_img w-100 h-50" alt="first"/>
                
            </div>
            </div>
            <div className='col-lg-4 col-6 col-sm-6 col-md-6 mt-1' data-aos="zoom-out">

            <div className='card'>
                <img src={SecondImage} className="img img-fluid glimp_img" alt="first"/>
            </div>
            </div>
            <div className='col-lg-4 col-6 col-sm-6 col-md-6 mt-1' data-aos="zoom-out">
            <div className='card'>
                <img src={ThirdImage} className="img img-fluid glimp_img" alt="first"/>
            </div>
            </div>
            <div className='col-lg-4 col-6 col-sm-6 col-md-6 mt-1' data-aos="zoom-out">
            <div className='card'>
                <img src={FourthImage} className="img img-fluid glimp_img" alt="first"/>
            </div>
            </div>

            <div className='col-lg-4 col-6 col-sm-6 col-md-6 mt-1' data-aos="zoom-out">
            <div className='card'>
                <img src={ThirdImage} className="img img-fluid glimp_img" alt="first"/>
            </div>
            </div>
            <div className='col-lg-4 col-6 col-sm-6 col-md-6 mt-1' data-aos="zoom-out">
            <div className='card'>
                <img src={FourthImage} className="img img-fluid glimp_img" alt="first"/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Glimpses