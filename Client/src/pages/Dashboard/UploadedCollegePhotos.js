import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getAllPhotos,
  deleteCollegePhoto,
} from "../../actions/UploadCollegePhotos";
import { List, Typography, Empty } from "antd";
import { Alert } from "@mui/material";
const UploadedCollegePhotos = ({
  getAllPhotos,
  collegePhoto,
  deleteCollegePhoto,
}) => {
  useEffect(() => {
    getAllPhotos();
  }, []);
  const [selectedImage, handleImage] = useState("");
  const [deleted, handleDeleted] = useState(false);
  const deleteItem = () => {
    console.log(selectedImage.toString());
    const id = selectedImage.toString();
    deleteCollegePhoto({ id });
    handleDeleted(true);
  };
  return (
    <div className="container">
      <div className="row">
        {collegePhoto.length<1 ? <></> :<><div className="col-lg-3 deleteBtn">
          <button
            className="btn btn-md btn-outline-warning my-3"
            onClick={deleteItem}
          >
            Delete
          </button>
        </div></>}
      </div>

      <div className="row d-flex">
        <div className="col-lg-11">
          {collegePhoto.length < 1 ? (
            <>
                <p className="text text-center">Upload Your Photos, to see here.</p>
            </>
          ) : (
            <>
              {collegePhoto.length === 1 ? (
                <>
                  <List size="large" bordered>
                    <List.Item className="d-flex flex-row justify-content-between">
                    <Typography></Typography>
                      <Typography>Image</Typography>
                      <Typography>Longitude</Typography>
                      <Typography>Latitude</Typography>
                      <Typography>Date Uploaded</Typography>
                    </List.Item>
                  </List>
                  <List size="large" bordered>
                    <List.Item className="">
                      <input type="checkbox" onChange={(e)=>handleImage(collegePhoto[0]._id)}/>
                      {/* {collegePhoto[0]._id} */}
                      <div
                      className="d-flex flex-row justify-content-start">
                      <img
                        src={collegePhoto[0].photo}
                        alt="college_photo"
                        style={{ width: "50px", height: "50px" }}
                      />
                      </div>
                      <p className="text text-center"> {collegePhoto[0].longitude}</p>
                      <p>{collegePhoto[0].latitude}</p>
                      <p>{collegePhoto[0].date}</p>
                    </List.Item>
                  </List>
                </>
              ) : (
                <>
                <List size="large" bordered
                >
                    <List.Item className="d-flex flex-row justify-content-between">
                    <Typography></Typography>
                      <Typography>Id</Typography>
                      <Typography>Image</Typography>
                      <Typography>Longitude</Typography>
                      <Typography>Latitude</Typography>
                      <Typography>Date Uploaded</Typography>
                    </List.Item>
                  </List>
                  <List
                    size="large"
                    bordered
                    dataSource={collegePhoto}
                    renderItem={(item) => (
                      <>
                        <List.Item>
                        <input type="checkbox" onChange = { (e)=>handleImage(item._id)}/>
                        <Typography>{item._id}</Typography>
                        <img
                          src={item.photo}
                          alt="college_photo"
                          style={{ width: "50px", height: "50px" }}
                        />
                        <Typography>{item.longitude}</Typography>
                        <Typography>{item.latitude}</Typography>
                        <Typography>{item.date}</Typography>
                        </List.Item>
                      </>
                    )}
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

UploadedCollegePhotos.propTypes = {
  collegePhoto: PropTypes.array,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  collegePhoto: state.UploadCollegePhotos.collegePhoto,
});
export default connect(mapStateToProps, { getAllPhotos, deleteCollegePhoto })(
  UploadedCollegePhotos
);
