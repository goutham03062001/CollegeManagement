import React, { useState, useEffect } from "react";
import FirstImage from "../../Assets/Image1.jpg";
import SecondImage from "../../Assets/Image2.jpg";
import ThirdImage from "../../Assets/Image3.jpg";
import FourthImage from "../../Assets/Image4.jpg";
import "./glimpses.css";
import Aos from "aos";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllPhotos } from "../../actions/UploadCollegePhotos";
const Glimpses = ({ getAllPhotos, collegePhoto }) => {
  useEffect(() => {
    getAllPhotos();
  }, []);
  const [thisCollegePhotos, setThisCollegePhotos] = useState([{}]);
  const [isRequested, handleRequest] = useState(false);
  const loadMoreImages = () => {
    console.log(collegePhoto.length);
    setThisCollegePhotos(collegePhoto);
    console.log(thisCollegePhotos);
    handleRequest(true);
  };
  return (
    <div className="container">
      <div className="row">
        <h2
          className="text text-center text-muted  my-5 py-5"
          data-aos="zoom-out"
        >
          Few Glimpses In Our College
        </h2>
        <div className="col-lg-4 col-6 col-sm-6 col-md-6 mt-1">
          <div className="card" data-aos="zoom-out">
            <img
              src={FirstImage}
              className="img img-fluid glimp_img w-100 h-50"
              alt="first"
            />
          </div>
        </div>
        <div
          className="col-lg-4 col-6 col-sm-6 col-md-6 mt-1"
          data-aos="zoom-out"
        >
          <div className="card">
            <img
              src={SecondImage}
              className="img img-fluid glimp_img"
              alt="first"
            />
          </div>
        </div>
        <div
          className="col-lg-4 col-6 col-sm-6 col-md-6 mt-1"
          data-aos="zoom-out"
        >
          <div className="card">
            <img
              src={ThirdImage}
              className="img img-fluid glimp_img"
              alt="first"
            />
          </div>
        </div>
        <div
          className="col-lg-4 col-6 col-sm-6 col-md-6 mt-1"
          data-aos="zoom-out"
        >
          <div className="card">
            <img
              src={FourthImage}
              className="img img-fluid glimp_img"
              alt="first"
            />
          </div>
        </div>

        <div
          className="col-lg-4 col-6 col-sm-6 col-md-6 mt-1"
          data-aos="zoom-out"
        >
          <div className="card">
            <img
              src={ThirdImage}
              className="img img-fluid glimp_img"
              alt="first"
            />
          </div>
        </div>
        <div
          className="col-lg-4 col-6 col-sm-6 col-md-6 mt-1"
          data-aos="zoom-out"
        >
          <div className="card">
            <img
              src={FourthImage}
              className="img img-fluid glimp_img"
              alt="first"
            />
          </div>
        </div>
      </div>

      {/* second row */}
      <div className="row mt-5">
        {isRequested === true ? (
          <>
            {thisCollegePhotos.map((currentPhoto) => {
              return (<>
                {currentPhoto.photo!=="" ? <>
                {thisCollegePhotos.indexOf(currentPhoto)%2===0 ? <>
                    <div className="col-lg-4 my-3 col-6 col-sm-6 col-md-6 mt-1"
                    >
                <div className="card">
                  <img
                    src={currentPhoto.photo}
                    alt="myImage"
                    className="img img-fluid glimp_img"
                  />
                </div>
              </div>
                </> : <>
                <div className="col-lg-4 my-3 col-6 col-sm-6 col-md-6 mt-1"
                >
                <div className="card">
                  <img
                    src={currentPhoto.photo}
                    alt="myImage"
                    className="img img-fluid glimp_img"
                  />
                </div>
              </div>
                </>}
                </> : <>
                
                </>}
              </>);
            })}
          </>
        ) : (
          <></>
        )}
        <div className="col-lg-12 my-5 d-flex justify-content-center">
          <button
            className="btn btn-md btn-outline-primary"
            onClick={loadMoreImages}
          >
            Load More Images
          </button>
        </div>
      </div>
    </div>
  );
};

Glimpses.prototypes = {
  isLoading: PropTypes.bool,
  collegePhoto: PropTypes.array,
};

const mapStateToProps = (state) => ({
  isLoading: state.UploadCollegePhotos.issLoading,
  collegePhoto: state.UploadCollegePhotos.collegePhoto,
});
export default connect(mapStateToProps, { getAllPhotos })(Glimpses);
