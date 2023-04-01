import React, {useEffect} from "react";
import zomato from "../../Assets/zomato.jpeg";
import swiggy from "../../Assets/swiggy.jpeg";
import cmrcet from "../../Assets/cmrcet.jpg";
import microsoft from "../../Assets/microsoft.jpeg";
import "./clients.css";
import Aos from "aos";
const Clients = () => {
  useEffect(()=>{
    Aos.init({
      duration:2000,
      offset:200
    })
  })
  return (
    <div className="container my-1">
      <div className="row py-1">
        <h3 className="text text-center text-muted my-5" id= "our-clients" data-aos="fade-up" data-aos-anchor-placement="top-bottom">ACHIVEMENTS</h3>
        <div className="row">
          <div className="col-lg-3 col-sm-10 col-6 col-md-4 my-5 mobile_clients" data-aos="fade-up">
            <div className="card client">
              <div className="card-inner">
                <p className="text text-muted">First Achievement</p>

                {/* <img
                  src={zomato}
                  className="img img-fluid client_img"
                  alt="zomato"
                /> */}
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-10 col-md-4 my-5 mobile_clients" data-aos="fade-up">
            <div className="card client">
              <div className="card-inner">
                <p className="text text-muted">Second Achievement</p>

                {/* <img
                  src={swiggy}
                  className="img img-fluid client_img"
                  alt="zomato"
                /> */}
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-10 col-md-4 my-5 mobile_clients" data-aos="fade-up">
            <div className="card client">
              <div className="card-inner">
                <p className="text text-muted">Third Achievement</p>

                {/* <img
                  src={cmrcet}
                  className="img img-fluid client_img"
                  alt="zomato"
                /> */}
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-10 col-md-4 my-5 mobile_clients" data-aos="fade-up">
            <div className="card client">
              <div className="card-inner">
                <p className="text text-muted">Fourth Achievement</p>

                {/* <img
                  src={microsoft}
                  className="img img-fluid client_img"
                  alt="zomato"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
