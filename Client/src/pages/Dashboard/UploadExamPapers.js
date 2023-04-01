
import React, { useState } from "react";
import {Alert, Upload} from "antd";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { uploadExamPaper } from "../../actions/ExamPapers";
const UploadExamPapers = ({uploadExamPaper,paper}) => {
  const [groupName, setGroupName] = useState("");
  const [year, setYear] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [photo, setPhoto] = useState();
  const[yearOfHappened,setYearOfHappened] = useState();
  const[imageUrl,setImageUrl] = useState('');
  const [isUploaded, setIsUploaded] = useState(false);
  const[isPressed,setIsPressed] = useState(false);

  var myImageUrl = "";
  const submitFormDetails = (e) => {
    setIsPressed(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", photo);
    formData.append("upload_preset", "freu3elv");
    formData.append("cloud_name", "df7u8xpms");

    fetch("https://api.cloudinary.com/v1_1/df7u8xpms/image/upload", {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("imageUrl : ", data.secure_url);
        myImageUrl = data.secure_url;
        setImageUrl(data.secure_url);
          
        
          uploadExamPaper({imageUrl:myImageUrl
            ,groupName,subjectName,year});
        
        setIsUploaded(true);
        
      })
      .catch((error) => {
        console.log("Error Occurred While Uploading photo : ", error.message);
      });
      console.log("Group Name : ", groupName);
      console.log("Year : ", year);
      console.log("Subject Name : ", subjectName);
      console.log("Phot URL : ", imageUrl);
      
      //send to backend
    
      if(paper){
        console.log("Your Paper Obj ",paper);
      }
      
  };
  return (
    <>
      <button
        type="button"
        class="btn btn-outline-warning"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Upload Previous Year Papers
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Upload Exam Paper
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            {
              isUploaded && paper ? <>
                <Alert
                  message="Details Uploaded Successfully"
                  type="success"
                  showIcon
                  closable
                />
              </>:<p></p>
            }
            { isPressed && !paper && !isUploaded ? <>
              <Alert
                message="Details Uploading, please wait..."
                type="info"
                

              />
            </>:<></>}
              <form onSubmit={ (e)=>{submitFormDetails(e)} }>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Group Name:
                  </label>
                  <input
                    type="text"
                    value={groupName}
                    class="form-control"
                    placeholder="Ex. MPC, Bipc"
                    onChange={(e) => {
                      setGroupName(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">
                    Year:
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    value={year}
                    placeholder="Ex. First Year , Second Year"
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">
                    Subject Name :{" "}
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    value={subjectName}
                    placeholder="Ex. Physics, Chemistry"
                    onChange={(e) => {
                      setSubjectName(e.target.value);
                    }}
                  />
                </div>

                <div class="form-group">
                  <label for="message-text" class="col-form-label">
                    Choose Image :{" "}
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    
                    onChange={(e) => {
                      setPhoto(e.target.files[0]);
                    }}
                  />
                </div>


                <div class="form-group">
                  <label for="message-text" class="col-form-label">
                    Year Of Conduction :{" "}
                  </label>
                  <input
                    class="form-control"
                    type="number"
                    value={yearOfHappened}
                    onChange={(e) => {
                      setYearOfHappened(e.target.value);
                    }}
                  />
                </div>
                <div class="modal-footer">
              <button
                type="submit"
                onClick={(e)=>{
                  setGroupName('');
                  setYear('');
                  setPhoto('');
                  setYearOfHappened();
                  setSubjectName('');
                }}
                class="btn btn-secondary"
                data-dismiss="modal"
                
              >
                Close
              </button>
              {

                 isUploaded&&paper  ? <>

                
                </>:<>
                <button
                type="submit"
                class="btn btn-primary"
                
              >
                {isUploaded && imageUrl && isPressed ? "Success":"Upload"}
              </button>
                </>
              }
            </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
              <hr/>
      <div className="uploads">
        <p>Your Past Uploads </p>
      </div>
    </>
  );
};

UploadExamPapers.propTypes = {
  paper : PropTypes.object
}

const mapStateToProps = ((state)=>({
  paper : state.exampaper.paper
}))



export default connect(mapStateToProps,{uploadExamPaper})(UploadExamPapers);
