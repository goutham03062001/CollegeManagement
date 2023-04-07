import React, { useState,useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { UploadCollegePhoto ,getAllPhotos} from "../../actions/UploadCollegePhotos";
import Alert from "@mui/material/Alert";
var photo = "";
var longitude = ""; 
var latitude = "";
const UploadCollegePhotos = ({ UploadCollegePhoto, uploadedPhoto,getAllPhotos,collegePhoto }) => {
  useEffect(()=>{
    getAllPhotos();
  },[])
  const [image, setImage] = useState(null);
  const [isUploaded, setIsUploaded] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [show, handleShow] = useState(false);
  const closeAlert = () => {
    handleShow(false);
    console.log("clicked on button");
    setIsUploaded(false);
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      console.log(latitude);
      console.log(longitude);
    });
  }
  const uploadImage = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if(!image){
      return;
    }
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "freu3elv");
    formData.append("cloud_name", "df7u8xpms");

    fetch("https://api.cloudinary.com/v1_1/df7u8xpms/image/upload", {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("imageUrl : ", data.secure_url);
        photo = data.secure_url;
        setImageUrl(data.secure_url);
        setIsUploaded(true);
      })
      .catch((error) => {
        console.log("Error Occurred While Uploading photo : ", error.message);
      });
  };
  const uploadToBackend = (e) => {
    e.preventDefault();
    //Upload to backend
    let date = new Date().getDate();
    UploadCollegePhoto({ photo, date, longitude, latitude });
    setIsLoading(false);
    handleShow(true);
    setImage("");

  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
      <div className="card col-lg-4 ">
      <div className="card-body">
        {!isLoading && uploadedPhoto && show === true ? (
          <>
            <Alert severity="success">
              <p>
                Photo Uploaded Successfully{" "}
                <span>
                  <button 
                  onClick={closeAlert}
                  className = "btn btn-outline-danger btn-sm"
                  >close</button>
                </span>
              </p>
            </Alert>
          </>
        ) : (
          <></>
        )}
        {isLoading === true && !isUploaded ? (
          <>
            <CircularProgress />
          </>
        ) : (
          <>
           {isUploaded === true ? <>
            <p>Click On Submit</p>
           </> : <>
           <p>Upload College Photos</p>
           </>}
          </>
        )}
        <form>
          <input
            type="file"
            
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          {isUploaded === true ? (
            <>
              <button
                className="btn btn-md btn-dark "
                type="submit"
                onClick={(e) => uploadToBackend(e)}
              >
                Submit
              </button>
            </>
          ) : (
            <>
             {image!==null ? <>
              <button
                className="btn btn-sm btn-warning"
                type="submit"
                onClick={(e) => uploadImage(e)}
              >
                upload
              </button>
             </> : <>
             <button
                className="btn btn-sm btn-warning"
                type="submit"
                disabled
                onClick={(e) => uploadImage(e)}
              >
                upload
              </button>
             </>}
            </>
          )}
        </form>
      </div>
      <hr />
      <div>
      <p className="text px-2">Step -1 : First Click On Choose File</p>

        <p className="text px-2">Step -2 : Second Click On Upload Button</p>
        <p className="text px-2">Step -3 : Third Click On Submit Button</p>
      </div>
    </div>
    
      </div>
      
    </div>
  );
};

UploadCollegePhotos.propTypes = {
  photo: PropTypes.string,
  isLoading: PropTypes.bool,
  collegePhoto : PropTypes.array
};

const mapStateToProps = (state) => ({
  uploadedPhoto: state.UploadCollegePhotos.collegePhoto,
  isLoading: state.UploadCollegePhotos.isLoading,
  collegePhoto : state.UploadCollegePhotos.collegePhoto
});

export default connect(mapStateToProps, { UploadCollegePhoto , getAllPhotos})(
  UploadCollegePhotos
);
